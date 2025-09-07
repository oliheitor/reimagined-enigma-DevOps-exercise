FROM node:18-alpine
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
