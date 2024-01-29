/*
  Warnings:

  - Added the required column `sport` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "sport" TEXT NOT NULL;
