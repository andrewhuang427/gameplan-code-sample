/*
  Warnings:

  - Made the column `tournamentId` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `Registration` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Registration" ALTER COLUMN "tournamentId" SET NOT NULL,
ALTER COLUMN "teamId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
