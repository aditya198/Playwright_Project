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
TypeError: login.HRMLogout is not a function
```

```
Error: locator.clear: Test ended.
Call log:
  - waiting for locator('input#txtUsername')

```

# Test source

```ts
  1   | // import { expect, Locator, Page } from '@playwright/test'
  2   | // //Create class for login and clear locators
  3   | 
  4   | // export class AdminLogin{
  5   | //     // 1. declare variables for login
  6   | //     readonly page: Page
  7   | //     readonly userNameInput: Locator  //method to identify elemnt
  8   | //     readonly passwordInput: Locator
  9   | //     readonly loginButton : Locator
  10  | //     readonly welcomeMenu: Locator
  11  | //     readonly logout: Locator
  12  | 
  13  | //     // 2. Create constructors to define locators and initialistiing variables
  14  | //     constructor(page:Page) 
  15  | //     {
  16  | //         this.page=page
  17  | //         this.userNameInput=  page.locator('input#txtUsername')
  18  | //         this.passwordInput=  page.locator('input#txtPassword')
  19  | //         this.loginButton=page.getByRole('button', { name: 'LOGIN', exact: true })
  20  | //         this.welcomeMenu=page.getByRole('link', { name: 'Welcome Suresh' })
  21  | //        // this.logoutButton=page.getByText('Logout')
  22  | //         this.logout= page.getByRole('link', { name: 'Logout' })
  23  | //     }
  24  | 
  25  | //     //Method to launch URL
  26  | //     async LaunchUrl(url: string)
  27  | //     {
  28  | //         this.page.goto(url)
  29  | //     }
  30  | 
  31  | //     //method for login
  32  | //     async HRMLogin(user:string, pass:string)
  33  | //     {
  34  | //         await this.userNameInput.clear()
  35  | //         await this.userNameInput.fill(user)
  36  | //       //  await this.page.waitForTimeout(1000)
  37  | //         await this.passwordInput.clear()
  38  | //         await this.passwordInput.fill(pass)
  39  | //       //  await this.page.waitForTimeout(2000)
  40  | //         await this.loginButton.click()
  41  | //      //   await this.page.waitForTimeout(2000)
  42  | //         await expect(this.page).toHaveURL(/dashboard/)
  43  | //     }
  44  | 
  45  | //   //  Method for LOGOUT
  46  | //     async HRMLogout(){
  47  | //         await this.welcomeMenu.click()
  48  | //         await this.page.waitForTimeout(2000)
  49  | //         await this.logout.click()
  50  | //          await this.page.waitForTimeout(2000)
  51  | //     }
  52  | // }
  53  | 
  54  | import { expect, Locator, Page } from "@playwright/test";
  55  | 
  56  | //create class for login and define locators and methods
  57  | export class AdminLogin{
  58  |     //declare varibale for login
  59  |     readonly page: Page
  60  |     readonly userNameInput: Locator
  61  |     readonly passWordInput : Locator
  62  |     readonly loginButton : Locator
  63  |     readonly welcomeMenu: Locator
  64  |     readonly logout:Locator
  65  |     constructor(page:Page){
  66  |         this.page =page
  67  |         this.userNameInput=   page.locator('input#txtUsername')
  68  |         this.passWordInput=  page.locator('input#txtPassword')
  69  |         this.loginButton = page.getByRole('button', { name: 'LOGIN', exact: true })
  70  |        this.welcomeMenu = page.getByRole('link', { name: 'Welcome Suresh' })
  71  |        this.logout= page.getByRole('link', { name: 'Logout' })
  72  |         }
  73  |         //method for launch url
  74  |         async LaunchUrl(url:string)
  75  |         {
  76  |             this.page.goto(url)
  77  | 
  78  |         }
  79  |         //meethod for login
  80  |         async HRMLogin(user:string,pass:string)
  81  |         {
> 82  |             await this.userNameInput.clear()
      |                                      ^ Error: locator.clear: Test ended.
  83  |             await this.userNameInput.fill(user)
  84  |             await this.passWordInput.clear()
  85  |             await this.passWordInput.fill(pass)
  86  |             await this.loginButton.click()
  87  |             await this.page.waitForTimeout(3000)
  88  |             await expect(this.page).toHaveURL(/dashboard/);
  89  | 
  90  | 
  91  |         }
  92  |         //method for logout
  93  |         async HrMLogout()
  94  |         {
  95  |             await this.welcomeMenu.click()
  96  |             await this.page.waitForTimeout(3000)
  97  |             await this.logout.click()
  98  |             await this.page.waitForTimeout(3000)
  99  |         }
  100 | 
  101 | 
  102 | 
  103 | 
  104 | 
  105 | }
```