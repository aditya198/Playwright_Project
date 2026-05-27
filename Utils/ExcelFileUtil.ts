import xlsx from 'xlsx'
export class ExcelFileUtil{

    // filePath
    // sheetName

    static getExcelData(filePath:string, sheetName:string){
        try{
            const wb = xlsx.readFile(filePath)
            const sheet = wb.Sheets[sheetName]
            return xlsx.utils.sheet_to_json(sheet);
        }
        catch(error){
            console.log(error);
        }
    }
}