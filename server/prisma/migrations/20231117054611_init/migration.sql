/*
  Warnings:

  - Made the column `userId` on table `Organization` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_userId_fkey";

-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
