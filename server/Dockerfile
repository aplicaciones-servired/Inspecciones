FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest

RUN pnpm install --config.confirmModulesPurge=false

EXPOSE 3000

CMD ["pnpm", "start"]