import { Injectable, NotFoundException } from '@nestjs/common';
import {Workbook} from 'exceljs'
import * as tmp from 'tmp'
import { writeFile } from 'fs/promises'

const data = [
    {
        name: 'nvp',
        email : 'nvp@gmail.com'
    },
    {
        name: 'nvp2',
        email : 'nvp2@gmail.com'
    }
]

@Injectable()
export class ImportExportService {
    async exportExcel(){
        if(!data){
            throw new NotFoundException("NO data to download")
        }
        
        let rows = []

        data.forEach(doc=>rows.push(Object.values(doc)))

        let book = new Workbook()

        let sheet = book.addWorksheet('sheet1')

        rows.unshift(Object.keys(data[0]))

        sheet.addRows(rows)

        // let File = await new Promise((resolve, reject )=>{
        //     tmp.file({
        //     //   discardDescriptor:true,
        //     //   prefix : 'myExcelSheet',
        //     //   postfix:'.xlsx',  
        //     //   mode: parseInt()
        //     })
        // })
    }
}
