import { Body, Controller, Post } from '@nestjs/common';
import { StudentLikeJobService } from './student-like-job.service';
import { StudentLikeJob } from '@prisma/client';

@Controller('student-like-job')
export class StudentLikeJobController {
  constructor(private studentLikeJobService: StudentLikeJobService) {}

  @Post('like')
  studentLikeJob(@Body() dto: StudentLikeJob) {
    return this.studentLikeJobService.studentLikeJob(dto);
  }
  @Post('unLike')
  StudentUnlikeJob(@Body() dto: StudentLikeJob) {
    return this.studentLikeJobService.studentUnLikeJob(dto);
  }
}
