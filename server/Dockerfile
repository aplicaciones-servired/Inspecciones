FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest

RUN pnpm install

WORKDIR /app/server

EXPOSE 3000

CMD ["pnpm", "start"]