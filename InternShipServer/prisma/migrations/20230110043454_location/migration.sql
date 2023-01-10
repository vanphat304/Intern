/*
  Warnings:

  - You are about to drop the column `specializeCompany` on the `studenprosal` table. All the data in the column will be lost.
  - Added the required column `specializeCompanyId` to the `studenprosal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studenprosal" DROP COLUMN "specializeCompany",
ADD COLUMN     "specializeCompanyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "studenprosal" ADD CONSTRAINT "studenprosal_specializeCompanyId_fkey" FOREIGN KEY ("specializeCompanyId") REFERENCES "SpecializeCompany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
