/*
  Warnings:

  - The primary key for the `Community` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Community` table. All the data in the column will be lost.
  - You are about to drop the column `communityId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `communitySiret` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_communityId_fkey";

-- AlterTable
ALTER TABLE "Community" DROP CONSTRAINT "Community_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Community_pkey" PRIMARY KEY ("siret");

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "communityId",
ADD COLUMN     "communitySiret" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_communitySiret_fkey" FOREIGN KEY ("communitySiret") REFERENCES "Community"("siret") ON DELETE RESTRICT ON UPDATE CASCADE;
