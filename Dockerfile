FROM node:lts-alpine AS builder

# Переход в рабочую директорию
WORKDIR /app

# Копирование package.json и package-lock.json для установки зависимостей
COPY ./frontend/package*.json ./

# Установка зависимостей
RUN npm install

# Копирование остальных файлов фронтенда
COPY ./frontend/ .

# Сборка фронтенда
RUN npm run build

# Использование образа Nginx как базового
FROM nginx:alpine

# Копирование собранного фронтенда в директорию с содержимым Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Удаление стандартного конфигурационного файла Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копирование вашего конфигурационного файла Nginx в контейнер
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf