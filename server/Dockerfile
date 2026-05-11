FROM node:lts-slim

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm@latest

# Copiar archivos de configuración
COPY package.json pnpm-lock.yaml ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN pnpm install --config.confirmModulesPurge=false

# Copiar el resto del código
COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]