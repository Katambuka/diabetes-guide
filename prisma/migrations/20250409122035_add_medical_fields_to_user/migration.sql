-- AlterTable
ALTER TABLE "User" ADD COLUMN     "diabetesType" TEXT,
ADD COLUMN     "diagnosisDate" TIMESTAMP(3),
ADD COLUMN     "doctor" TEXT,
ADD COLUMN     "lastA1C" DOUBLE PRECISION;
