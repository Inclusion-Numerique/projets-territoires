/*
  Warnings:

  - The primary key for the `Community` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categorieJuridiqueUniteLegale` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `codeCommuneEtablissement` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `codePostalEtablissement` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `denominationUniteLegale` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `libelleCommuneEtablissement` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `nic` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `siren` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `siret` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `communitySiret` on the `Project` table. All the data in the column will be lost.
  - Added the required column `id` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scale` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_communitySiret_fkey";

-- AlterTable
ALTER TABLE "Community" DROP CONSTRAINT "Community_pkey",
DROP COLUMN "categorieJuridiqueUniteLegale",
DROP COLUMN "codeCommuneEtablissement",
DROP COLUMN "codePostalEtablissement",
DROP COLUMN "denominationUniteLegale",
DROP COLUMN "libelleCommuneEtablissement",
DROP COLUMN "nic",
DROP COLUMN "siren",
DROP COLUMN "siret",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "scale" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "zipcodes" TEXT[],
ADD CONSTRAINT "Community_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "communitySiret",
ADD COLUMN     "communityId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
