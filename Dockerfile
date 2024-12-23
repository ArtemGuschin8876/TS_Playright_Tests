FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install msedge

COPY . .

CMD ["npx", "playwright", "test"]
