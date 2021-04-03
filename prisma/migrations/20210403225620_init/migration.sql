-- CreateTable
CREATE TABLE "Club" (
    "id" INTEGER NOT NULL,
    "reference" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club.reference_unique" ON "Club"("reference");
