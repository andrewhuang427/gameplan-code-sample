/*
  Warnings:

  - You are about to drop the column `stripePaymentIntent` on the `Registration` table. All the data in the column will be lost.
  - Added the required column `stripePaymentIntentId` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "stripePaymentIntent",
ADD COLUMN     "stripePaymentIntentId" TEXT NOT NULL;
