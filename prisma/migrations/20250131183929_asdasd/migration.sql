/*
  Warnings:

  - The `square` column on the `Studio` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Studio" DROP COLUMN "square",
ADD COLUMN     "square" INTEGER;
