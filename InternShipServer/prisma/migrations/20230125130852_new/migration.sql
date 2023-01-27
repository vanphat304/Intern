/*
  Warnings:

  - You are about to drop the column `username` on the `students` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "students_username_key";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "username";
