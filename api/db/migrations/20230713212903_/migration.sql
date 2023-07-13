-- CreateEnum
CREATE TYPE "Episode" AS ENUM ('NEW_HOPE', 'EMPIRE_STRIKES_BACK', 'RETURN_OF_THE_JEDI', 'ROGUE_ONE', 'PHANTOM_MENACE', 'ATTACK_OF_THE_CLONES', 'REVENGE_OF_THE_SITH', 'THE_FORCE_AWAKENS', 'THE_LAST_JEDI', 'THE_RISE_OF_SKYWALKER');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "appearsIn" "Episode"[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spaceship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "appearsIn" "Episode"[],

    CONSTRAINT "Spaceship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Spaceship_name_key" ON "Spaceship"("name");
