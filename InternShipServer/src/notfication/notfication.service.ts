import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NotificationStudent } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotficationService {
  constructor(private prisma: PrismaService) {}

  getListNotificationByIdStudent(id: string): Promise<Array<NotificationStudent>> {
    try {
      const notifications = this.prisma.notificationStudent.findMany({
        where: {
          studentId: id,
        },
      });

      return notifications;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
  getListNotifications(): Promise<Array<NotificationStudent>> {
    try {
      const notifications = this.prisma.notificationStudent.findMany();

      return notifications;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
  updateNotificationById(id: string) {
    try {
      const notifications = this.prisma.notificationStudent.update({
        where: {
          id,
        },
        data: {
          isRead: true,
        },
      });

      return notifications;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }

  deleteNotificationById(id: string) {
    try {
      const notifications = this.prisma.notificationStudent.delete({
        where: {
          id,
        },
      });

      return notifications;
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.BAD_REQUEST);
    }
  }
}
