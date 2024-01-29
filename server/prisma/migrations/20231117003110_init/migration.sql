/*
  Warnings:

  - Added the required column `sport` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sport` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sport` on the `Tournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SportType" AS ENUM ('BASEBALL', 'SOCCER', 'BASKETBALL', 'FIELD_HOCKEY');

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "sport" "SportType" NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "sport" "SportType" NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "sport",
ADD COLUMN     "sport" "SportType" NOT NULL;
