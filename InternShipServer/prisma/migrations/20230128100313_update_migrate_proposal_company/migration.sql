/*
  Warnings:

  - Added the required column `addressDistrictId` to the `studenprosal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressProvinceId` to the `studenprosal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studenprosal" ADD COLUMN     "addressDistrictId" TEXT NOT NULL,
ADD COLUMN     "addressProvinceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "studenprosal" ADD CONSTRAINT "studenprosal_addressProvinceId_fkey" FOREIGN KEY ("addressProvinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studenprosal" ADD CONSTRAINT "studenprosal_addressDistrictId_fkey" FOREIGN KEY ("addressDistrictId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
