/*
  Warnings:

  - The values [PENDING] on the enum `STATUS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "STATUS_new" AS ENUM ('NOT_WORKED', 'APPROPVED', 'REJECTED', 'SUMBMITED', 'WORKED');
ALTER TABLE "studentapplyjobs" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "studenprosal" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "resultapplyjob" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "studenprosal" ALTER COLUMN "status" TYPE "STATUS_new" USING ("status"::text::"STATUS_new");
ALTER TABLE "studentapplyjobs" ALTER COLUMN "status" TYPE "STATUS_new" USING ("status"::text::"STATUS_new");
ALTER TABLE "resultapplyjob" ALTER COLUMN "status" TYPE "STATUS_new" USING ("status"::text::"STATUS_new");
ALTER TYPE "STATUS" RENAME TO "STATUS_old";
ALTER TYPE "STATUS_new" RENAME TO "STATUS";
DROP TYPE "STATUS_old";
ALTER TABLE "studentapplyjobs" ALTER COLUMN "status" SET DEFAULT 'SUMBMITED';
ALTER TABLE "studenprosal" ALTER COLUMN "status" SET DEFAULT 'SUMBMITED';
ALTER TABLE "resultapplyjob" ALTER COLUMN "status" SET DEFAULT 'SUMBMITED';
COMMIT;
