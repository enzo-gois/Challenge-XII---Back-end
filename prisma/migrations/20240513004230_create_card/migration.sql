-- CreateTable
CREATE TABLE "Cards" (
    "id" TEXT NOT NULL,
    "imagem_url" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);
