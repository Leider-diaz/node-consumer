FROM node:18-alpine

#Create a app directory
WORKDIR /node-consumer

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app souce
COPY . .

CMD ["node", "./consumer.js"]
