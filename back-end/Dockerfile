# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

RUN rm .env

RUN cp .env.docker .env

# Expõe a porta 3000 para que a aplicação possa ser acessada externamente
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]
