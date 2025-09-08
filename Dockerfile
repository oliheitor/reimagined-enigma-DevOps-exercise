FROM node:18-alpin
WORKDIR /app

# instala só o necessário
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# copia código
COPY . .

# porta padrão do app
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
FROM node:18-alpin
WORKDIR /app

# instala dependências com cache eficiente
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# copia o restante do código
COPY . .

ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
