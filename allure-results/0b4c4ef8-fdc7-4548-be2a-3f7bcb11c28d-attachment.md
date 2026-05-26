# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HrmSingleData.spec.ts >> HRM Employee Management >> Add Employee successfully
- Location: tests\HrmSingleData.spec.ts:19:9

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test'
  2  | //Create class for login and clear locators
  3  | 
  4  | export class AdminLogin{
  5  |     // 1. declare variables for login
  6  |     readonly page: Page
  7  |     readonly userNameInput: Locator  //method to identify elemnt
  8  |     readonly passwordInput: Locator
  9  |     readonly loginButton : Locator
  10 |     readonly welcomeMenu: Locator
  11 |     readonly logoutButton: Locator
  12 | 
  13 |     // 2. Create constructors to define locators and initialistiing variables
  14 |     constructor(page:Page) 
  15 |     {
  16 |         this.page=page
  17 |         this.userNameInput=  page.locator('input#txtUsername')
  18 |         this.passwordInput=  page.locator('input#txtPassword')
  19 |         this.loginButton=page.getByRole('button', { name: 'LOGIN', exact: true })
  20 |         this.welcomeMenu=page.getByRole('link', { name: 'Welcome Suresh' })
  21 |         this.logoutButton=page.getByText('Logout')
  22 |     }
  23 | 
  24 |     //Method to launch URL
  25 |     async LaunchUrl(url: string)
  26 |     {
> 27 |         this.page.goto(url)
     |                   ^ Error: page.goto: url: expected string, got undefined
  28 |     }
  29 | 
  30 |     //method for login
  31 |     async HRMLogin(user:string, pass:string)
  32 |     {
  33 |         await this.userNameInput.clear()
  34 |         await this.userNameInput.fill(user)
  35 |       //  await this.page.waitForTimeout(1000)
  36 |         await this.passwordInput.clear()
  37 |         await this.passwordInput.fill(pass)
  38 |       //  await this.page.waitForTimeout(2000)
  39 |         await this.loginButton.click()
  40 |      //   await this.page.waitForTimeout(2000)
  41 |         await expect(this.page).toHaveURL(/dashboard/)
  42 |     }
  43 | 
  44 |   //  Method for LOGOUT
  45 |     async HRMLogout(){
  46 |         await this.welcomeMenu.click()
  47 |         await this.page.waitForTimeout(2000)
  48 |         await this.logoutButton.click()
  49 |          await this.page.waitForTimeout(2000)
  50 |     }
  51 | }
  52 | 
```