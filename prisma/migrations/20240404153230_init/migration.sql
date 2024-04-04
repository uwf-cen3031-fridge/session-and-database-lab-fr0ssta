-- CreateTable
CREATE TABLE "Useer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Useer_username_key" ON "Useer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Useer_email_key" ON "Useer"("email");
