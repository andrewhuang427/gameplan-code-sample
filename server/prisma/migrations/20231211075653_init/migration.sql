/*
  Warnings:

  - You are about to drop the column `recurranceDetail` on the `Camp` table. All the data in the column will be lost.
  - You are about to drop the column `recurrancePattern` on the `Camp` table. All the data in the column will be lost.
  - Added the required column `recurrenceDetail` to the `Camp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Camp" DROP COLUMN "recurranceDetail",
DROP COLUMN "recurrancePattern",
ADD COLUMN     "recurrenceDetail" TEXT NOT NULL,
ADD COLUMN     "recurrencePattern" "RecurrencePattern" NOT NULL DEFAULT 'ONE_TIME';
