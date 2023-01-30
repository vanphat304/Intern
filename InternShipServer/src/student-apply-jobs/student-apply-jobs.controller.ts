import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Student, StudentApplyJob } from '@prisma/client';
import { StudentApplyJobsService } from './student-apply-jobs.service';
import { Response } from 'express';

@Controller('student-apply-jobs')
export class StudentApplyJobsController {
  constructor(private StudentApplyJobService: StudentApplyJobsService) {}

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

  @Get('export')
  exportStudentApply(@Res() res : Response) {
    return this.StudentApplyJobService.exportStudentApply(res);
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
