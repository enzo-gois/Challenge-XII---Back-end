Como Rodar:

```bash
# Clone o repositório
git clone https://github.com/enzo-gois/Challenge-XII---Back-end

# Navegue até o diretório do projeto
cd Challenge-XII---Back-end

# Instale as dependências
npm install
```

Configuração de ambiente:

```bash

crie um arquivo .env na raíz do projeto
e coloque o seguinte conteudo

DATABASE_URL = link pro seu banco de dados mySQL
link do banco neste formato =>   "mysql://nomedeusuario:senha@localhostOuOLinkDoSeuBanco:porta/nomeDoBanco?schema=public"
url de teste = "mysql://admin:Password1527@myridedbeg.cricim8k85x5.us-east-2.rds.amazonaws.com:3306/myridedb?schema=public"

```

Inicializando a página

```bash
#Código para iniciar a aplicação em mode de desenvolvimento
npm run start:dev
```

O servidor irá rodar neste link ->   http://localhost:3001
