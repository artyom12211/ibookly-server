/*
  Warnings:

  - You are about to drop the column `min_rent_hour` on the `Studio` table. All the data in the column will be lost.
  - You are about to drop the column `square` on the `Studio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Studio" DROP COLUMN "min_rent_hour",
DROP COLUMN "square",
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "rooms" INTEGER,
ADD COLUMN     "shooting_square" INTEGER,
ADD COLUMN     "total_square" INTEGER;
