import {test} from'@playwright/test'
import { AdminLogin } from '../Pages/AdminLogin'
import { AddEmp } from '../Pages/AddEmp'
import * as dotenv from 'dotenv'
import { ExcelFileUtil } from '../Utils/ExcelFileUtil'
//import { ExcelUtils } from '../Utils/ExcelFileUtil'
import path from 'path'
dotenv.config();
const filePath = path.join(__dirname,"../TestData/Excel-Data.xlsx")
const sheetName = "EmpData"
let testdataemp:any
try{
    testdataemp = ExcelFileUtil.getExcelData(filePath, sheetName)
}
catch(message){
  console.log(message);
}
test.describe('Multiple Data Using Excel File',()=>{
    let login : AdminLogin
    let emp : AddEmp
    test.beforeEach(async({page})=>{
        login = new AdminLogin(page)
        emp = new AddEmp(page)
        //call url method
        await login.LaunchUrl(process.env.BASE_URL!)
        await login.HRMLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
    })

    for (const data of testdataemp) {
        test(`Add Employee using Excel ${data.FirstName}`,async()=>{
             //call add emp method
            console.log(data.FirstName, data.MiddleName, data.LastName)
            await emp.Add_Emp(data.FirstName, data.MiddleName, data.LastName);                   
        })
    }
  })

