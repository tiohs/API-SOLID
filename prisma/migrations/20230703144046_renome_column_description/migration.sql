/*
  Warnings:

  - You are about to drop the column `description` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "description",
ADD COLUMN     "decription" TEXT;
