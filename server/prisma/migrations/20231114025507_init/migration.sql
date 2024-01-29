-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamCity" TEXT NOT NULL,
    "teamState" TEXT NOT NULL,
    "teamContactName" TEXT NOT NULL,
    "teamContactPhone" TEXT NOT NULL,
    "teamContactEmail" TEXT NOT NULL,
    "teamSecondaryContactName" TEXT,
    "teamSecondaryContactPhone" TEXT,
    "teamSecondaryContactEmail" TEXT,
    "isPaymentComplete" BOOLEAN NOT NULL,
    "tournamentId" INTEGER,
    "teamId" INTEGER,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamContactName" TEXT NOT NULL,
    "teamContactPhone" TEXT NOT NULL,
    "teamContactEmail" TEXT NOT NULL,
    "teamSecondaryContactName" TEXT,
    "teamSecondaryContactPhone" TEXT,
    "teamSecondaryContactEmail" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
