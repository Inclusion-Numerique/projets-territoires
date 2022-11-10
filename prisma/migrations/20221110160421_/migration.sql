/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `communityId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "communityId" UUID NOT NULL,
ADD COLUMN     "reference" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Community" (
    "id" UUID NOT NULL,
    "nic" TEXT NOT NULL,
    "siren" TEXT NOT NULL,
    "siret" TEXT NOT NULL,
    "codeCommuneEtablissement" TEXT NOT NULL,
    "codePostalEtablissement" TEXT NOT NULL,
    "libelleCommuneEtablissement" TEXT NOT NULL,
    "categorieJuridiqueUniteLegale" TEXT NOT NULL,
    "denominationUniteLegale" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_reference_key" ON "Project"("reference");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
