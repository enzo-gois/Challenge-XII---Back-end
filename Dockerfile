FROM node:20:alpine 

WORKDIR /usr/src

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

CMD ["npm", "run", "start:prod"]