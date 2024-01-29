/*
  Warnings:

  - You are about to drop the column `date` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `ageGroup` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameMinimum` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentAddress` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentCost` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tournamentName` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "date",
DROP COLUMN "name",
ADD COLUMN     "ageGroup" INTEGER NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gameMinimum" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tournamentAddress" TEXT NOT NULL,
ADD COLUMN     "tournamentCost" INTEGER NOT NULL,
ADD COLUMN     "tournamentName" TEXT NOT NULL;
