FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install @playwright/test

RUN npx playwright install msedge


COPY . .

CMD ["npx", "playwright", "test"]
