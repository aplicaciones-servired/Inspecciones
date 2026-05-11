FROM node:lts-slim

WORKDIR /app

RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --config.confirmModulesPurge=false

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]