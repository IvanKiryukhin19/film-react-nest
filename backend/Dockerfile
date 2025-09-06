# Используем базовый образ с Node.js
FROM node:lts-alpine3.22 AS builder
WORKDIR /app
# Копируем пакетный файл и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Теперь используем базовый образ для запуска приложения
FROM node:lts-alpine3.22 AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/dist ./dist

# Открываем порт, на котором будет работать ваше приложение
EXPOSE 3000

# Запускаем приложение
CMD ["node", "dist/main.js"]
