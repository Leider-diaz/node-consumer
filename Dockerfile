FROM node:17-alpine

RUN npm install amqplib

COPY consumer.js /consumer.js

CMD ["node", "./consumer.js"]