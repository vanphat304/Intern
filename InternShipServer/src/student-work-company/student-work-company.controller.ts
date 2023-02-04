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
} from '@nestjs/common';
import { StudentWorkCompany } from '@prisma/client';
import { StudentWorkCompanyService } from './student-work-company.service';

@Controller('student-work-company')
export class StudentWorkCompanyController {
  constructor(private StudentWorkCompanyService: StudentWorkCompanyService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addStudentWorkCompany(@Body() dto): Promise<StudentWorkCompany> {
    const {idJobApply , ...studentWork} = dto;
    return this.StudentWorkCompanyService.addStudentWorkCompany(idJobApply , studentWork);
  }
  @Get()
  getListStudentWorkCompany( @Query() query): Promise<StudentWorkCompany[]> {
    return this.StudentWorkCompanyService.getListStudentWorkCompany(query);
  }

  @Get('/count')
  getListStudentWorkCompanyRecords( @Query() query): Promise<number> {
    return this.StudentWorkCompanyService.getTotalRecord();
  }

  @Get(':id')
  getStudentWorkCompanyById(@Param('id') id: string): Promise<StudentWorkCompany> {
    return this.StudentWorkCompanyService.getStudentWorkCompanyById(id);
  }
  @Put('update')
  updateStudentWorkCompany(@Body() dto: StudentWorkCompany) {
    return this.StudentWorkCompanyService.updateStudentWorkCompany(dto);
  }
  @Delete(':id')
  deleteStudentWorkCompany(@Param('id') id: string) {
    return this.StudentWorkCompanyService.deleteStudentWorkCompany(id);
  }
}
