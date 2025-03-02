-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userid" BIGINT NOT NULL,
    "firstName" TEXT NOT NULL,
    "username" TEXT,
    "languageCode" TEXT NOT NULL,
    "allowsWriteToPM" BOOLEAN NOT NULL DEFAULT true,
    "hasPro" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" BIGINT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
