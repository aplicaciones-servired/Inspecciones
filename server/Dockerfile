FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest

    RUN pnpm install --allow-scripts && pnpm run build

CMD ["npm", "start"]