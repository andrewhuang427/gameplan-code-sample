/*
  Warnings:

  - The values [FIELD_HOCKEY] on the enum `SportType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SportType_new" AS ENUM ('BASEBALL', 'SOCCER', 'BASKETBALL');
ALTER TABLE "Organization" ALTER COLUMN "sport" TYPE "SportType_new" USING ("sport"::text::"SportType_new");
ALTER TABLE "Tournament" ALTER COLUMN "sport" TYPE "SportType_new" USING ("sport"::text::"SportType_new");
ALTER TABLE "Team" ALTER COLUMN "sport" TYPE "SportType_new" USING ("sport"::text::"SportType_new");
ALTER TYPE "SportType" RENAME TO "SportType_old";
ALTER TYPE "SportType_new" RENAME TO "SportType";
DROP TYPE "SportType_old";
COMMIT;
