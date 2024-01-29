/*
  Warnings:

  - Made the column `ageGroup` on table `Camp` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Camp" ALTER COLUMN "ageGroup" SET NOT NULL;
