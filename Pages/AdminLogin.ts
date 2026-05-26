import { expect, Locator, Page } from "@playwright/test";

//create class for login and define locators and methods
export class AdminLogin{
    //declare varibale for login
    readonly page: Page
    readonly userNameInput: Locator
    readonly passWordInput : Locator
    readonly loginButton : Locator
    readonly welcomeMenu: Locator
    readonly logout:Locator
    constructor(page:Page){
        this.page =page
        this.userNameInput=   page.locator('input#txtUsername')
        this.passWordInput=  page.locator('input#txtPassword')
        this.loginButton = page.getByRole('button', { name: 'LOGIN', exact: true })
       this.welcomeMenu = page.getByRole('link', { name: 'Welcome Suresh' })
       this.logout= page.getByRole('link', { name: 'Logout' })
        }
        //method for launch url
        async LaunchUrl(url:string)
        {
            this.page.goto(url)

        }
        //meethod for login
        async HRMLogin(user:string,pass:string)
        {
            await this.userNameInput.clear()
            await this.userNameInput.fill(user)
            await this.passWordInput.clear()
            await this.passWordInput.fill(pass)
            await this.loginButton.click()
            await this.page.waitForTimeout(3000)
            await expect(this.page).toHaveURL(/dashboard/);


        }
        //method for logout
        async HrMLogout()
        {
            await this.welcomeMenu.click()
            await this.page.waitForTimeout(3000)
            await this.logout.click()
            await this.page.waitForTimeout(3000)
        }





}