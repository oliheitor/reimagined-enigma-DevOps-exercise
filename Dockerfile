FROM node:18-alpine
WORKDIR /app

# instala dependências com cache eficiente
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# copia o restante do código
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
