/*
  Warnings:

  - Made the column `organizationId` on table `Tournament` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_organizationId_fkey";

-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "organizationId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
