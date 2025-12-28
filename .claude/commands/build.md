---
description: Build and verify the entire project autonomously
---

Execute full build and verification cycle:

1. **Install dependencies**
   - Run npm/pip install
   - Verify all packages installed
   - Check for vulnerabilities

2. **Type checking**
   - Run TypeScript compiler
   - Fix any type errors
   - Update types if needed

3. **Linting**
   - Run ESLint
   - Auto-fix all fixable issues
   - Report remaining issues

4. **Testing**
   - Run all unit tests
   - Run integration tests
   - Generate coverage report

5. **Build**
   - Build production bundle
   - Optimize assets
   - Generate sourcemaps

6. **Verification**
   - Check bundle size
   - Verify no errors
   - Test critical paths

7. **Report**
   - Output: Build status
   - Output: Test coverage
   - Output: Bundle analysis
   - Output: Deploy readiness

Proceed automatically. Fix all issues encountered.
