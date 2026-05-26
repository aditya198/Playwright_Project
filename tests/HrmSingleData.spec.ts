import { test, expect } from '@playwright/test';
import { AdminLogin } from '../Pages/AdminLogin';
import { AddEmp } from '../Pages/AddEmp';
import * as dotenv from 'dotenv';
dotenv.config()      // to access "Environment" file
test.describe('HRM Employee Management',() =>{
    let login:AdminLogin
    let emp:AddEmp
    test.beforeEach(async({page})=>{
        login=new AdminLogin(page)
        emp= new AddEmp(page)
       await login.LaunchUrl(process.env.BASE_URL!)
       await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!)
    });
    test('Add Employee successfully', async ({page})=>{
        await emp.Add_Emp('Abhi','s','Singh')     
    })
    test.afterEach(async()=>{
        await login.HrMLogout()
    });
});