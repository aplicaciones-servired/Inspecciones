FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest

RUN pnpm install && pnpm run build

EXPOSE 3000

CMD ["npm", "start"]