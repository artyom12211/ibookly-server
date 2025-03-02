/*
  Warnings:

  - You are about to drop the column `allowsWriteToPM` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasPro` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `languageCode` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "allowsWriteToPM",
DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "hasPro",
DROP COLUMN "languageCode",
ADD COLUMN     "allows_write_to_pm" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "created_at" BIGINT NOT NULL,
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "has_pro" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "language_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userid_key" ON "User"("userid");
