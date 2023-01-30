import { Global, Injectable, NotFoundException } from '@nestjs/common';
import {Workbook} from 'exceljs'
import * as tmp from 'tmp'
import { writeFile } from 'fs/promises'
import { Response } from 'express';

@Injectable()
export class ImportExportService {
    async exportExcel( res : Response ,data : any){

        res.setHeader('Content-disposition', 'attachment; filename=vnp.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        if(!data){
            throw new NotFoundException("NO data to download")
        }
        
        let rows = []

        data.forEach(doc=>rows.push(Object.values(doc)))

        let book = new Workbook()

        let sheet = book.addWorksheet('sheet1')

        rows.unshift(Object.keys(data[0]))

        sheet.addRows(rows)

        return book.xlsx.write(res)


    }
}
