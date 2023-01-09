-- DropForeignKey
ALTER TABLE "studentworkcompanys" DROP CONSTRAINT "studentworkcompanys_studentId_fkey";

-- AddForeignKey
ALTER TABLE "studentworkcompanys" ADD CONSTRAINT "studentworkcompanys_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
