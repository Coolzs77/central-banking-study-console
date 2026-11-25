const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const repoOwner = 'Coolzs77';
const repoName = 'central-banking-study-console';

console.log('🚀 [DEPLOY] Starting production build & deployment to GitHub...');

// Helper for https requests
function requestGitHub(pathName, method, token, postData) {
  return new Promise((resolve, reject) => {
    const payload = postData ? JSON.stringify(postData) : null;
    const req = https.request({
      hostname: 'api.github.com',
      path: pathName,
      method: method,
      headers: {
        'User-Agent': 'NodeJS',
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        ...(payload ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } : {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: data ? JSON.parse(data) : null });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function main() {
  // 1. Get token
  console.log('🔑 [1/6] Retrieving GitHub credentials from git-credential-manager...');
  const creds = execSync('git credential fill', { input: 'protocol=https\nhost=github.com\n\n' }).toString();
  const tokenMatch = creds.match(/password=(.+)/);
  if (!tokenMatch) {
    console.error('❌ Could not retrieve GitHub token from git credentials.');
    process.exit(1);
  }
  const token = tokenMatch[1].trim();
  console.log(`✓ [1/6] Retrieved GitHub credentials for user: ${repoOwner}`);

  // 2. Check / Create Repository
  console.log(`🔍 [2/6] Checking if repository ${repoOwner}/${repoName} exists on GitHub...`);
  const checkRes = await requestGitHub(`/repos/${repoOwner}/${repoName}`, 'GET', token);
  if (checkRes.status === 404) {
    console.log(`📦 Creating new public repository: ${repoName}...`);
    const createRes = await requestGitHub('/user/repos', 'POST', token, {
      name: repoName,
      description: '《中央银行学》平时作业本与期末100分全真模考控制台 (React 18 + Vite + TypeScript + 粘土拟态风格 + 161题背诵矩阵 + 54题作业手写版)',
      homepage: `https://${repoOwner.toLowerCase()}.github.io/${repoName}/`,
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: false
    });
    if (createRes.status === 201) {
      console.log(`✓ Created repository successfully! URL: ${createRes.data.html_url}`);
    } else {
      console.error(`❌ Failed to create repository (status ${createRes.status}):`, createRes.data || createRes.raw);
      process.exit(1);
    }
  } else if (checkRes.status === 200) {
    console.log(`✓ Repository ${repoOwner}/${repoName} already exists.`);
  } else {
    console.error(`❌ Error checking repository (status ${checkRes.status}):`, checkRes.data || checkRes.raw);
  }

  // 3. Initialize git and commit source files
  console.log('📝 [3/6] Initializing local git repository and committing source code...');
  const gitDir = path.join(rootDir, '.git');
  if (!fs.existsSync(gitDir)) {
    execSync('git init -b main', { cwd: rootDir, stdio: 'inherit' });
  } else {
    execSync('git checkout -B main', { cwd: rootDir, stdio: 'inherit' });
  }

  // Configure author if not set
  try {
    execSync('git config user.name', { cwd: rootDir });
  } catch {
    execSync(`git config user.name "${repoOwner}"`, { cwd: rootDir });
    execSync(`git config user.email "coolzs77@users.noreply.github.com"`, { cwd: rootDir });
  }

  const authOriginUrl = `https://${token}@github.com/${repoOwner}/${repoName}.git`;
  const cleanOriginUrl = `https://github.com/${repoOwner}/${repoName}.git`;

  try {
    execSync(`git remote set-url origin "${authOriginUrl}"`, { cwd: rootDir, stdio: 'ignore' });
  } catch {
    execSync(`git remote add origin "${authOriginUrl}"`, { cwd: rootDir, stdio: 'ignore' });
  }

  execSync('git add -A', { cwd: rootDir, stdio: 'inherit' });
  try {
    execSync('git commit -m "feat: initial release of Central Banking Study Console & 100-pt Mock Exam (React 18 + Vite + TS + Claymorphism)"', {
      cwd: rootDir,
      stdio: 'inherit'
    });
  } catch (ce) {
    console.log('ℹ️ No new changes to commit to main branch.');
  }

  console.log('📤 Pushing main branch to origin...');
  execSync('git push -u origin main -f', { cwd: rootDir, stdio: 'inherit' });
  console.log('✓ [3/6] Pushed main branch successfully!');

  // 4. Build Vite static bundle
  console.log('📦 [4/6] Building production bundle (npm run build)...');
  execSync('node ./node_modules/vite/bin/vite.js build', { cwd: rootDir, stdio: 'inherit' });
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
  console.log('✓ [4/6] Created .nojekyll in dist/');

  // 5. Deploy dist/ to origin/gh-pages branch
  console.log('📤 [5/6] Deploying dist/ to origin/gh-pages branch...');
  const tempIndex = path.join(rootDir, '.git', 'gh-pages-deploy.index');
  const distGit = path.join(distDir, '.git');
  try {
    if (fs.existsSync(distGit)) {
      fs.rmSync(distGit, { recursive: true, force: true });
    }
    if (fs.existsSync(tempIndex)) {
      fs.rmSync(tempIndex, { force: true });
    }

    let hasRemoteBranch = false;
    try {
      execSync(`git fetch origin +gh-pages:refs/remotes/origin/gh-pages --depth=1`, { cwd: rootDir, stdio: 'ignore' });
      hasRemoteBranch = true;
    } catch (fe) {
      console.log('[DEPLOY] Remote gh-pages not found, creating initial commit...');
    }

    const gitEnv = { ...process.env, GIT_INDEX_FILE: tempIndex };
    execSync(`git --git-dir="${path.join(rootDir, '.git')}" --work-tree="${distDir}" add -A`, {
      cwd: rootDir,
      env: gitEnv,
      stdio: 'inherit',
    });
    const treeSha = execSync(`git --git-dir="${path.join(rootDir, '.git')}" write-tree`, {
      cwd: rootDir,
      env: gitEnv,
    }).toString().trim();

    const parentArg = hasRemoteBranch ? '-p refs/remotes/origin/gh-pages' : '';
    const commitSha = execSync(
      `git --git-dir="${path.join(rootDir, '.git')}" commit-tree ${treeSha} ${parentArg} -m "deploy: update production build on gh-pages"`,
      { cwd: rootDir, env: gitEnv }
    ).toString().trim();

    execSync(`git push origin ${commitSha}:refs/heads/gh-pages -f`, { cwd: rootDir, stdio: 'inherit' });
    console.log('✓ [5/6] Successfully pushed to origin/gh-pages!');
  } catch (e) {
    console.error('❌ Error pushing to gh-pages:', e.message);
    process.exit(1);
  } finally {
    if (fs.existsSync(tempIndex)) {
      fs.rmSync(tempIndex, { force: true });
    }
    // Restore clean remote url without token
    try {
      execSync(`git remote set-url origin "${cleanOriginUrl}"`, { cwd: rootDir, stdio: 'ignore' });
    } catch {}
  }

  // 6. Enable GitHub Pages
  console.log('🌐 [6/6] Verifying and enabling GitHub Pages...');
  try {
    const pagesStatus = await requestGitHub(`/repos/${repoOwner}/${repoName}/pages`, 'GET', token);
    if (pagesStatus.status === 404) {
      console.log('⚙️ Pages not enabled yet. Requesting GitHub to enable Pages on gh-pages branch...');
      const enableRes = await requestGitHub(`/repos/${repoOwner}/${repoName}/pages`, 'POST', token, {
        source: { branch: 'gh-pages', path: '/' }
      });
      console.log(`✓ GitHub Pages enable request status: ${enableRes.status}`);
    } else if (pagesStatus.status === 200) {
      console.log(`✓ GitHub Pages is already active: ${pagesStatus.data.html_url}`);
    }
  } catch (err) {
    console.log(`⚠️ Note: GitHub Pages API verification skipped (${err.message}). The gh-pages branch is pushed and active.`);
  }

  const liveUrl = `https://${repoOwner.toLowerCase()}.github.io/${repoName}/`;
  console.log('\n======================================================');
  console.log('🎉 [DEPLOY SUCCESS] 成功部署至 GitHub & GitHub Pages!');
  console.log(`📂 GitHub 仓库地址: https://github.com/${repoOwner}/${repoName}`);
  console.log(`🌍 在线访问主页:   ${liveUrl}`);
  console.log('======================================================\n');
}

main().catch(err => {
  console.error('❌ Deployment script failed:', err);
  process.exit(1);
});
