# TripCustomizer Security Incident Response Playbook

Follow this protocol immediately if a secret, API key, database file, or customer data is suspected of being exposed or committed to Git.

---

## Immediate Incident Protocol (8 Steps)

### Step 1: Immediately Revoke & Rotate the Credential
Do not wait to fix the code before rotating the key. Assume any committed key is compromised immediately.
- **Razorpay**: Open Razorpay Dashboard > **Account & Settings > API Keys** > Click **Regenerate Key** > Select *Deactivate old key immediately*.
- **Admin Password**: Update `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in Vercel Environment Variables.
- **Supabase**: Open Supabase Dashboard > **Project Settings > API** > Generate new Service Role / Anon keys.
- **Web3Forms**: Generate a new access key at Web3Forms dashboard.

### Step 2: Remove Credential from Active Source Code
- Update the code to read the rotated credential from `process.env`.
- Remove any hardcoded references.

### Step 3: Check Git History & Exposure Window
- Run git log searches to identify when the secret was committed:
  ```bash
  git log -S "<compromised_secret_fragment>" --oneline
  ```
- Check GitHub audit logs and clone traffic.

### Step 4: Check Logs & Access Records
- **Razorpay Dashboard**: Review recent transactions and API logs for unauthorized charge or refund calls.
- **Vercel Logs**: Check access logs for suspicious IP patterns.
- **Supabase / Firebase**: Check database query logs for abnormal bulk data exports.

### Step 5: Purge Git History (If Repository Was Public)
If the secret was pushed to a public repository, deleting the file in a new commit does **NOT** remove it from Git history.
- Use `git-filter-repo` or BFG Repo-Cleaner to rewrite history and purge the secret:
  ```bash
  # Example with git-filter-repo
  git filter-repo --invert-paths --path <compromised_file>
  ```
- Note: Coordinate with team before force-pushing rewritten branches.

### Step 6: Update Production Environment (Vercel)
- Update the new credentials in Vercel Dashboard under **Project Settings > Environment Variables**.
- Trigger a fresh production deployment:
  ```bash
  vercel --prod
  ```

### Step 7: Verify System Health
- Run the local guardrail health check:
  ```bash
  npm run security:check
  ```
- Verify that checkout and payment gateway webhooks operate correctly with the newly rotated keys.

### Step 8: Document the Incident
- Record:
  - Date and time detected
  - Exact credential exposed
  - Root cause (how it was committed)
  - Actions taken and resolution timestamp
  - Preventative guardrails added to ensure no recurrence
