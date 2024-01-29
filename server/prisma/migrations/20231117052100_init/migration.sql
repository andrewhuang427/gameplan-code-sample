/*
  Warnings:

  - Made the column `name` on table `Organization` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_userId_fkey";

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "address" TEXT,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
