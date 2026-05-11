FROM node:lts-slim

WORKDIR /app

RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile --ignore-scripts && pnpm rebuild

COPY . .

RUN pnpm run build

CMD ["pnpm", "start"]