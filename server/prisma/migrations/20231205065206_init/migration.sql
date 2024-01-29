/*
  Warnings:

  - You are about to drop the column `isPublished` on the `Tournament` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "isPublished";

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ageGroup" INTEGER NOT NULL,
    "playerContactEmail" TEXT NOT NULL,
    "playerContactPhone" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camp" (
    "id" SERIAL NOT NULL,
    "eventAddress" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "sport" "SportType" NOT NULL,
    "ageGroup" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "playerMaximum" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "Camp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampRegistration" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripePaymentIntentId" TEXT NOT NULL,
    "campId" INTEGER,
    "playerId" INTEGER,

    CONSTRAINT "CampRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampRegistration_campId_playerId_key" ON "CampRegistration"("campId", "playerId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camp" ADD CONSTRAINT "Camp_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampRegistration" ADD CONSTRAINT "CampRegistration_campId_fkey" FOREIGN KEY ("campId") REFERENCES "Camp"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampRegistration" ADD CONSTRAINT "CampRegistration_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
