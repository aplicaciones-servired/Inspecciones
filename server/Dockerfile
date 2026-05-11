FROM node:lts-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@latest

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["node", "--import", "tsx", "./src/index.ts"]