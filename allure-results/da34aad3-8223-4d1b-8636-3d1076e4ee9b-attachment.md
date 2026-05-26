# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HrmSingleData.spec.ts >> HRM Employee Management >> Add Employee successfully
- Location: tests\HrmSingleData.spec.ts:17:9

# Error details

```
Error: page.goto: url: expected string, got undefined
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#welcome')
    - waiting for" http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login" navigation to finish...
    - navigated to "http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login"

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```