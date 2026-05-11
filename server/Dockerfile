FROM node:lts-slim

WORKDIR /app

# Evitar prompts interactivos
ENV CI=true
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Instalar pnpm
RUN npm install -g pnpm@latest

# Copiar archivos
COPY package.json pnpm-lock.yaml ./

# Instalar con flags específicos para CI
RUN pnpm install \
    --frozen-lockfile \
    --ignore-scripts \
    --config.confirmModulesPurge=false

# Copiar código
COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]