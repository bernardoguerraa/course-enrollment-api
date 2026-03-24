-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Matricula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alunoId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativa',
    CONSTRAINT "Matricula_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Matricula_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Matricula" ("alunoId", "cursoId", "id") SELECT "alunoId", "cursoId", "id" FROM "Matricula";
DROP TABLE "Matricula";
ALTER TABLE "new_Matricula" RENAME TO "Matricula";
CREATE UNIQUE INDEX "Matricula_alunoId_cursoId_key" ON "Matricula"("alunoId", "cursoId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
