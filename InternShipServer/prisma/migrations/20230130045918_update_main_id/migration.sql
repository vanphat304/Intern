/*
  Warnings:

  - You are about to drop the `StudentLikeJob` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentLikeJob" DROP CONSTRAINT "StudentLikeJob_jobId_fkey";

-- DropForeignKey
ALTER TABLE "StudentLikeJob" DROP CONSTRAINT "StudentLikeJob_studentId_fkey";

-- DropTable
DROP TABLE "StudentLikeJob";

-- CreateTable
CREATE TABLE "studentlikeJobs" (
    "jobId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentlikeJobs_pkey" PRIMARY KEY ("jobId","studentId")
);

-- AddForeignKey
ALTER TABLE "studentlikeJobs" ADD CONSTRAINT "studentlikeJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobdecriptions"("jobId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentlikeJobs" ADD CONSTRAINT "studentlikeJobs_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
