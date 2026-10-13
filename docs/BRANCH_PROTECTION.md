# GitHub Branch Protection & Repository Security Configuration

To ensure that no unvetted code, secrets, or breaking changes bypass the security guardrails, apply the following settings in the GitHub repository.

---

## 1. Branch Protection Rules for `main`

Navigate to: **GitHub Repository > Settings > Branches > Add branch protection rule**

Set **Branch name pattern**: `main`

Enable the following rules:

1. **Require a pull request before merging**:
   - Check: *Require approvals* (at least 1 review required).
   - Check: *Dismiss stale pull request approvals when new commits are pushed*.
2. **Require status checks to pass before merging**:
   - Check: *Require branches to be up to date before merging*.
   - In the search bar, add the required check:
     - `Security Gate & Automated Guardrails` (from `.github/workflows/security.yml`).
3. **Do not allow bypassing the above settings**:
   - Ensures administrators and repository owners are also bound by the CI checks.
4. **Block force pushes**:
   - Check: *Do not allow force pushes* (prevents history tampering).
5. **Block deletions**:
   - Check: *Do not allow deletions* (prevents accidental branch deletion).

---

## 2. GitHub Native Security Features

Navigate to: **GitHub Repository > Settings > Code security and analysis**

Enable the following:
1. **Dependabot alerts**: Enabled.
2. **Dependabot security updates**: Enabled (creates automatic PRs for vulnerable dependencies).
3. **Secret scanning**: Enabled (detects committed API keys).
4. **Push protection for secret scanning**: Enabled (blocks commits containing secrets before push).

---

## 3. Vercel Environment Variables Setup

Ensure the following variables are set in the Vercel Dashboard under **Project Settings > Environment Variables**:

### Production & Preview Environments:
- `RAZORPAY_KEY_ID`: Live Razorpay Key ID
- `RAZORPAY_KEY_SECRET`: Live Razorpay Key Secret
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`: Live Razorpay Key ID (Client-safe)
- `ADMIN_EMAIL`: `admin@tripcustomizer.com`
- `ADMIN_PASSWORD`: Strong production administrator password
- `ADMIN_SESSION_SECRET`: 64-character random cryptographic secret
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase client anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase server service role key
- `WEB3FORMS_ACCESS_KEY`: Web3Forms notification key
