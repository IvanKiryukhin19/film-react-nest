FROM node:lts-alpine3.22 AS builder

WORKDIR /app

# Копируем пакетный файл и устанавливаем зависимости
COPY package*.json ./
RUN npm install
RUN npm install -g typescript

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
CMD ["npm", "run", "build"]