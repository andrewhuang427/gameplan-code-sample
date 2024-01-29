/*
  Warnings:

  - You are about to drop the column `cost` on the `Camp` table. All the data in the column will be lost.
  - You are about to drop the column `eventAddress` on the `Camp` table. All the data in the column will be lost.
  - You are about to drop the column `eventName` on the `Camp` table. All the data in the column will be lost.
  - Added the required column `campAddress` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campCost` to the `Camp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campName` to the `Camp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Camp" DROP COLUMN "cost",
DROP COLUMN "eventAddress",
DROP COLUMN "eventName",
ADD COLUMN     "campAddress" TEXT NOT NULL,
ADD COLUMN     "campCost" INTEGER NOT NULL,
ADD COLUMN     "campName" TEXT NOT NULL;
