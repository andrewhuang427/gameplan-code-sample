/*
  Warnings:

  - You are about to drop the column `campCost` on the `Camp` table. All the data in the column will be lost.
  - You are about to drop the column `tournamentCost` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Camp" DROP COLUMN "campCost",
ADD COLUMN     "cost" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "tournamentCost",
ADD COLUMN     "cost" INTEGER NOT NULL;
