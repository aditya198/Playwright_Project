# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HrmSingleData.spec.ts >> HRM Employee Management >> Add Employee successfully
- Location: tests\HrmSingleData.spec.ts:15:9

# Error details

```
Error: page.goto: url: expected string, got undefined
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { AdminLogin } from '../Pages/AdminLogin';
  3  | import { AddEmp } from '../Pages/AddEmp';
  4  | import * as dotenv from 'dotenv';
  5  |  dotenv.config()
  6  | test.describe('HRM Employee Management',() =>{
  7  |     let login: AdminLogin
  8  |     let emp: AddEmp
  9  |     test.beforeEach(async({page})=>{
  10 |         login=new AdminLogin(page)
  11 |         emp= new AddEmp(page)
  12 |        await login.LaunchUrl(process.env.BASE_URL!)
  13 |        await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!)
  14 |     });
  15 |     test('Add Employee successfully', async ({page})=>{
  16 |         await emp.AddEmp('Aditya','A','Batra')     
  17 |     })
> 18 |     test.afterEach(async()=>{
     |          ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  19 |         await login.HRMLogout()
  20 |     })
  21 | })
```