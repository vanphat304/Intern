import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StudentWorkCompany } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentWorkCompanyService {
  constructor(private prisma: PrismaService) {}
  async addStudentWorkCompany(idJobApply: string, dto: StudentWorkCompany) {
    try {
      const StudentWorkCompany: StudentWorkCompany = await this.prisma.studentWorkCompany.create({
        data: {
          ...dto,
        },
      });

      await this.prisma.studentApplyJob.update({
        where: {
          id: idJobApply,
        },
        data: {
          status: 'WORKED',
        },
      });

      return StudentWorkCompany;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  async getListStudentWorkCompany(query): Promise<Array<StudentWorkCompany>> {
    const { studentId, companyId, pageSize, pageNumber } = query;

    try {
      const listStudentWorkCompany: Array<StudentWorkCompany> =
        await this.prisma.studentWorkCompany.findMany({
          skip: (pageNumber - 1) * pageSize || 0,
          take: pageSize * 1 || 10,
          include: {
            company: true,
            student: true,
          },
          where: {
            companyId: {
              contains: companyId || '',
            },
            studentId: {
              contains: studentId || '',
            },
          },
        });

      return listStudentWorkCompany;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  async getTotalRecord() {
    return await this.prisma.studentWorkCompany.count();
  }

  async getStudentWorkCompanyById(studentId: string): Promise<StudentWorkCompany> {
    try {
      const StudentWorkCompany: StudentWorkCompany = await this.prisma.studentWorkCompany.findFirst(
        {
          where: {
            studentId,
          },
          include: {
            company: {
              select: {
                nameCompany: true,
                logo: true,
                id: true,
              },
            },
            student: {
              select: {
                identifierStudent: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      );
      return StudentWorkCompany;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  async updateStudentWorkCompany(dto: StudentWorkCompany) {
    try {
      const { studentId, ...rest } = dto;
      const result = await this.prisma.studentWorkCompany.update({
        where: {
          studentId,
        },
        data: {
          ...rest,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
  async deleteStudentWorkCompany(studentId: string) {
    try {
      const result = await this.prisma.studentWorkCompany.delete({
        where: {
          studentId,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}
