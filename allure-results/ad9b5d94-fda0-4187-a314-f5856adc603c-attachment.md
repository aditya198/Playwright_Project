# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HrmSingleData.spec.ts >> HRM Employee Management >> Add Employee successfully
- Location: tests\HrmSingleData.spec.ts:51:9

# Error details

```
Error: page.goto: url: expected string, got undefined
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | // import { test, expect } from '@playwright/test';
  2  | // import { AdminLogin } from '../Pages/AdminLogin';
  3  | // import { AddEmp } from '../Pages/AddEmp';
  4  | // import * as dotenv from 'dotenv'
  5  | // import { afterEach } from 'node:test';
  6  | // dotenv.config()
  7  | // test.describe('HRM Employee Management', () =>{
  8  | //     let login: AdminLogin
  9  | //     let emp: AddEmp
  10 | //     test.beforeEach(async({page}) =>{
  11 | //         login=new AdminLogin(page)
  12 | //         emp= new AddEmp(page)
  13 | //        await login.LaunchUrl(process.env.Base_url!)
  14 | //        await page.waitForTimeout(3000)
  15 | //        await page.waitForURL("http://orangehrm.qedgetech.com/")
  16 | //        await login.HRMLogin(process.env.Base_User!, process.env.Base_Pass!)
  17 | //     });
  18 | //     test('Add Employee successfully', async ({page})=>{
  19 | //         await emp.AddEmp('Aditya','A','Batra')     
  20 | //     })
  21 | //     test.afterEach(async() =>{
  22 | //         await login.HRMLogout()
  23 | //     })
  24 | // })
  25 | 
  26 | import { test, expect } from '@playwright/test';
  27 | import { AdminLogin } from '../Pages/AdminLogin';
  28 | import { AddEmp } from '../Pages/AddEmp';
  29 | import * as dotenv from 'dotenv';
  30 | 
  31 | dotenv.config();
  32 | 
  33 | test.describe('HRM Employee Management', () => {
  34 | 
  35 |     let login: AdminLogin;
  36 |     let emp: AddEmp;
  37 | 
  38 |     test.beforeEach(async ({ page }) => {
  39 | 
  40 |         login = new AdminLogin(page);
  41 |         emp = new AddEmp(page);
  42 | 
  43 |         await login.LaunchUrl(process.env.Base_url!);
  44 | 
  45 |         await login.HRMLogin(
  46 |             process.env.Base_User!,
  47 |             process.env.Base_Pass!
  48 |         );
  49 |     });
  50 | 
  51 |     test('Add Employee successfully', async () => {
  52 | 
  53 |         await emp.AddEmp('Aditya', 'A', 'Batra');
  54 | 
  55 |     });
  56 | 
> 57 |     test.afterEach(async () => {
     |          ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  58 | 
  59 |         await login.HRMLogout();
  60 | 
  61 |     });
  62 | 
  63 | });
```