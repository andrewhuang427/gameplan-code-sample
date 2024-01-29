/*
  Warnings:

  - You are about to drop the column `teamContactEmail` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamContactName` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamContactPhone` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `teamContactEmail` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `teamContactName` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `teamContactPhone` on the `Team` table. All the data in the column will be lost.
  - Added the required column `teamPrimaryContactEmail` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamPrimaryContactName` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamPrimaryContactPhone` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamPrimaryContactEmail` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamPrimaryContactName` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamPrimaryContactPhone` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "teamContactEmail",
DROP COLUMN "teamContactName",
DROP COLUMN "teamContactPhone",
ADD COLUMN     "teamPrimaryContactEmail" TEXT NOT NULL,
ADD COLUMN     "teamPrimaryContactName" TEXT NOT NULL,
ADD COLUMN     "teamPrimaryContactPhone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "teamContactEmail",
DROP COLUMN "teamContactName",
DROP COLUMN "teamContactPhone",
ADD COLUMN     "teamPrimaryContactEmail" TEXT NOT NULL,
ADD COLUMN     "teamPrimaryContactName" TEXT NOT NULL,
ADD COLUMN     "teamPrimaryContactPhone" TEXT NOT NULL;
