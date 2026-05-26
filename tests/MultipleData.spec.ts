import {test} from "@playwright/test";
import { AdminLogin } from '../Pages/AdminLogin';
import { AddEmp } from '../Pages/AddEmp';
import * as dotenv from 'dotenv'
dotenv.config()       // to access "Environment" file
import employeeData from '../TestData/Employee.json'  //object to call data from Employee.json file
// import { before } from "node:test";
test.describe(`Multiple data using json file`, () =>{
    let login: AdminLogin  // Initialise Both classes AdminLogin class and AddEmp class
    let emp: AddEmp
    test.beforeEach(async({page}) =>{       //write precondition that before login with creadentials
         login=new AdminLogin(page)      // Call login login firstly with method of page
         emp=new AddEmp(page)
         //---call url method-----//
         await login.LaunchUrl(process.env.BASE_URL!)    // call url from Environment file
         await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!)
    })
        for (const data of employeeData) {
            test(`Add_Emp ${data.firstName} ${data.middleName} ${data.lastName} `, async ({page}) =>{
                    // call add emp() method
                    await emp.Add_Emp(data.firstName,data.middleName,data.lastName)
            })
        }
    })
