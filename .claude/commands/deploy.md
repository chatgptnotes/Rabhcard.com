---
description: Deploy to production autonomously with all checks
---

Execute autonomous deployment:

1. **Pre-deployment checks**
   - Run full build
   - Run all tests
   - Check environment variables
   - Verify dependencies

2. **Version bump**
   - Auto-increment version
   - Update footer with new version
   - Update CHANGELOG
   - Git tag release

3. **Deploy**
   - Push to Git
   - Deploy to Vercel/AWS
   - Wait for deployment success
   - Verify deployment

4. **Post-deployment**
   - Test production URLs
   - Verify SSL certificates
   - Check performance metrics
   - Smoke test critical features

5. **Rollback plan**
   - Document previous version
   - Keep rollback script ready
   - Monitor error rates

6. **Output**
   - Production URL
   - Version number
   - Deployment timestamp
   - Health check results

No confirmations needed. Deploy on success.
