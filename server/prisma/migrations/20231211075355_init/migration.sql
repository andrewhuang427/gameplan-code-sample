/*
  Warnings:

  - Added the required column `recurranceDetail` to the `Camp` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RecurrencePattern" AS ENUM ('ONE_TIME', 'WEEKLY', 'BI_WEEKLY', 'MONTHLY');

-- AlterTable
ALTER TABLE "Camp" ADD COLUMN     "recurranceDetail" TEXT NOT NULL,
ADD COLUMN     "recurrancePattern" "RecurrencePattern" NOT NULL DEFAULT 'ONE_TIME';
