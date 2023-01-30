import { Controller, Get, Header, Res } from '@nestjs/common';
import { ImportExportService } from './import-export.service';
import { Response } from 'express';

@Controller('import-export')
export class ImportExportController {
    constructor(private excelService : ImportExportService){}

    @Get('/export')
    // @Header('Content-disposition', 'attachment; filename=anlikodullendirme.xlsx')
    exportFileExcel(@Res() res: Response){
        return this.excelService.exportExcel(res,[])
    }
}
