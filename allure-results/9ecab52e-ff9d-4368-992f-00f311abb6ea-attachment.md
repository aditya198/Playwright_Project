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
  11 |     readonly logout: Locator
  12 | 
  13 |     // 2. Create constructors to define locators and initialistiing variables
  14 |     constructor(page:Page) 
  15 |     {
  16 |         this.page=page
  17 |         this.userNameInput=  page.locator('input#txtUsername')
  18 |         this.passwordInput=  page.locator('input#txtPassword')
  19 |         this.loginButton=page.getByRole('button', { name: 'LOGIN', exact: true })
  20 |         this.welcomeMenu=page.getByRole('link', { name: 'Welcome Suresh' })
  21 |        // this.logoutButton=page.getByText('Logout')
  22 |         this.logout= page.getByRole('link', { name: 'Logout' })
  23 |     }
  24 | 
  25 |     //Method to launch URL
  26 |     async LaunchUrl(url: string)
  27 |     {
> 28 |         this.page.goto(url)
     |                   ^ Error: page.goto: url: expected string, got undefined
  29 |     }
  30 | 
  31 |     //method for login
  32 |     async HRMLogin(user:string, pass:string)
  33 |     {
  34 |         await this.userNameInput.clear()
  35 |         await this.userNameInput.fill(user)
  36 |       //  await this.page.waitForTimeout(1000)
  37 |         await this.passwordInput.clear()
  38 |         await this.passwordInput.fill(pass)
  39 |       //  await this.page.waitForTimeout(2000)
  40 |         await this.loginButton.click()
  41 |      //   await this.page.waitForTimeout(2000)
  42 |         await expect(this.page).toHaveURL(/dashboard/)
  43 |     }
  44 | 
  45 |   //  Method for LOGOUT
  46 |     async HRMLogout(){
  47 |         await this.welcomeMenu.click()
  48 |         await this.page.waitForTimeout(2000)
  49 |         await this.logout.click()
  50 |          await this.page.waitForTimeout(2000)
  51 |     }
  52 | }
  53 | 
```