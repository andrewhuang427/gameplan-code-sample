/*
  Warnings:

  - Added the required column `teamMaximum` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "teamMaximum" INTEGER NOT NULL;
