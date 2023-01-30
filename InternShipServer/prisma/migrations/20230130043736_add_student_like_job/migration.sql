-- CreateTable
CREATE TABLE "StudentLikeJob" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentLikeJob_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentLikeJob" ADD CONSTRAINT "StudentLikeJob_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobdecriptions"("jobId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentLikeJob" ADD CONSTRAINT "StudentLikeJob_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
