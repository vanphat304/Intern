/*
  Warnings:

  - You are about to drop the column `specializeCompanyId` on the `studenprosal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "studenprosal" DROP CONSTRAINT "studenprosal_specializeCompanyId_fkey";

-- AlterTable
ALTER TABLE "studenprosal" DROP COLUMN "specializeCompanyId";
