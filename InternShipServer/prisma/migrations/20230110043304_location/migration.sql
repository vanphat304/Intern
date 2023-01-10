/*
  Warnings:

  - You are about to drop the column `addressDistrict` on the `companys` table. All the data in the column will be lost.
  - You are about to drop the column `addressProvince` on the `companys` table. All the data in the column will be lost.
  - Added the required column `addressDistrictId` to the `companys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressProvinceId` to the `companys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specializeCompanyId` to the `companys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companys" DROP COLUMN "addressDistrict",
DROP COLUMN "addressProvince",
ADD COLUMN     "addressDistrictId" TEXT NOT NULL,
ADD COLUMN     "addressProvinceId" TEXT NOT NULL,
ADD COLUMN     "specializeCompanyId" TEXT NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- CreateTable
CREATE TABLE "SpecializeCompany" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SpecializeCompany_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "companys" ADD CONSTRAINT "companys_specializeCompanyId_fkey" FOREIGN KEY ("specializeCompanyId") REFERENCES "SpecializeCompany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companys" ADD CONSTRAINT "companys_addressProvinceId_fkey" FOREIGN KEY ("addressProvinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companys" ADD CONSTRAINT "companys_addressDistrictId_fkey" FOREIGN KEY ("addressDistrictId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
