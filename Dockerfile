FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
RUN npm install
CMD ["npm" "dev"]