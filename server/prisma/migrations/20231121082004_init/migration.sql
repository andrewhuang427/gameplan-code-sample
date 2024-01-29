/*
  Warnings:

  - A unique constraint covering the columns `[tournamentId,teamId]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Registration_tournamentId_teamId_key" ON "Registration"("tournamentId", "teamId");
