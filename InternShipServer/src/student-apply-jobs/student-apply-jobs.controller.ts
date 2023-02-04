import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { STATUS, Student, StudentApplyJob } from '@prisma/client';
import { StudentApplyJobsService } from './student-apply-jobs.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { ImportExportService } from 'src/import-export/import-export.service';

@Controller('student-apply-jobs')
export class StudentApplyJobsController {
  constructor(
    private StudentApplyJobService: StudentApplyJobsService,
    private importResult: ImportExportService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addStudentApplyJob(@Body() dto: StudentApplyJob): Promise<StudentApplyJob> {
    console.log(dto);
    return this.StudentApplyJobService.addStudentApplyJob(dto);
  }
  @Get()
  getListStudentApplyJob(@Query() query): Promise<StudentApplyJob[]> {
    return this.StudentApplyJobService.getListStudentApplyJob(query);
  }
  @Get('count')
  getListStudentApplyJobCount(): Promise<number> {
    return this.StudentApplyJobService.getListStudentApplyJobCount();
  }

  @Get('export')
  exportStudentApply(@Res() res: Response, @Query() query) {
    return this.StudentApplyJobService.exportStudentApply(res, query);
  }
  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000000 }),
          // new FileTypeValidator({ fileType:'^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$' }),
        ],
      }),
    )
    file,
  ) {
    const data = await this.importResult.readFile(file);

    console.log({ data });

    const result = await Promise.all(
      data
        .filter((item) => item.value === STATUS.APPROPVED || item.value === STATUS.REJECTED)
        .map(({ value, id, description, subId }) => {
          switch (value) {
            case STATUS.APPROPVED:
              return this.StudentApplyJobService.approveStudentApplyJob(id, subId);
            case STATUS.REJECTED:
              return this.StudentApplyJobService.rejectStudentApplyJob(
                id,
                {
                  reasonReject: description,
                },
                subId,
              );
            default:
              break;
          }
        }),
    );
    console.log({ result });

    return data;
  }

  @Get('check')
  checkStudentIsApplied(@Query() query): Promise<boolean> {
    return this.StudentApplyJobService.checkStudentIsApplied(query);
  }

  @Get(':id')
  getStudentApplyJobById(@Param('id') id: string): Promise<StudentApplyJob> {
    return this.StudentApplyJobService.getStudentApplyJobById(id);
  }

  @Get('history-apply/:id')
  getStudentApplyJobHistory(@Param('id') id: string): Promise<Array<StudentApplyJob>> {
    return this.StudentApplyJobService.getStudentApplyJobHistory(id);
  }

  @Put('update')
  updateStudentApplyJob(@Body() dto: StudentApplyJob) {
    return this.StudentApplyJobService.updateStudentApplyJob(dto);
  }
  @Delete(':id')
  deleteStudentApplyJob(@Param('id') id: string) {
    return this.StudentApplyJobService.deleteStudentApplyJob(id);
  }

  @Put('approve/:id')
  approveStudentApplyJob(@Param('id') id: string) {
    return this.StudentApplyJobService.approveStudentApplyJob(id);
  }
  @Put('reject/:id')
  rejectStudentApplyJob(
    @Param('id') id: string,
    @Body() reasonReject: Pick<StudentApplyJob, 'reasonReject'>,
  ) {
    return this.StudentApplyJobService.rejectStudentApplyJob(id, reasonReject);
  }
}
