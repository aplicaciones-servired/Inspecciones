FROM node:lts-slim

WORKDIR /app

# Copiar solo dependencias primero (mejor cache)
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@latest
RUN pnpm install --config.confirmModulesPurge=false

# Luego copiar el resto
COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]