/*
  Warnings:

  - You are about to alter the column `salary` on the `jobdecriptions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- CreateEnum
CREATE TYPE "WOKINGFORM" AS ENUM ('PART_TIME', 'FULL_TIME');

-- AlterTable
ALTER TABLE "jobdecriptions" ADD COLUMN     "workingForm" "WOKINGFORM" DEFAULT 'PART_TIME',
ALTER COLUMN "salary" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "numberRecur" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "role" SET DEFAULT 'ADMIN';
