FROM node:18.14.2-alpine3.16

# Define o diretório de trabalho
WORKDIR /home/node/app

# Copia os arquivos de código-fonte
COPY . .

# Instala as dependências
RUN npm install

# Inicia a aplicação
CMD ["npm", "run", "dev"]