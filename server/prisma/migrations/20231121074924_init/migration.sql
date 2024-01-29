/*
  Warnings:

  - You are about to drop the column `isPaymentComplete` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamCity` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamName` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamPrimaryContactEmail` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamPrimaryContactName` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamPrimaryContactPhone` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamSecondaryContactEmail` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamSecondaryContactName` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamSecondaryContactPhone` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamState` on the `Registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "isPaymentComplete",
DROP COLUMN "teamCity",
DROP COLUMN "teamName",
DROP COLUMN "teamPrimaryContactEmail",
DROP COLUMN "teamPrimaryContactName",
DROP COLUMN "teamPrimaryContactPhone",
DROP COLUMN "teamSecondaryContactEmail",
DROP COLUMN "teamSecondaryContactName",
DROP COLUMN "teamSecondaryContactPhone",
DROP COLUMN "teamState",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
