/*
  Warnings:

  - Added the required column `speacialize` to the `studenprosal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studenprosal" ADD COLUMN     "speacialize" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "studenprosal" ADD CONSTRAINT "studenprosal_speacialize_fkey" FOREIGN KEY ("speacialize") REFERENCES "SpecializeCompany"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
