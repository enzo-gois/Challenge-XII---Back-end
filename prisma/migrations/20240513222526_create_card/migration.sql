CREATE TABLE `Cards` (
    `id` CHAR(36) NOT NULL,
    `imagem_url` VARCHAR(191) NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
