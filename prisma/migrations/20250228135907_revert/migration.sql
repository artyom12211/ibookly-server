/*
  Warnings:

  - Changed the type of `userid` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "userid",
ADD COLUMN     "userid" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userid_key" ON "User"("userid");
