-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('Main', 'Commission');

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "timestampStart" TIMESTAMPTZ(3) NOT NULL,
    "timestampEnd" TIMESTAMPTZ(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL,
    "photoUrl" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamAssignation" (
    "id" SERIAL NOT NULL,
    "manager" BOOLEAN NOT NULL,
    "email" TEXT,
    "teamId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamRole" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "type" "RoleType" NOT NULL,
    "parentId" INTEGER,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeamAssignation" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamAssignation" ADD FOREIGN KEY ("memberId") REFERENCES "TeamMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamAssignation" ADD FOREIGN KEY ("roleId") REFERENCES "TeamRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamRole" ADD FOREIGN KEY ("parentId") REFERENCES "TeamRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;
