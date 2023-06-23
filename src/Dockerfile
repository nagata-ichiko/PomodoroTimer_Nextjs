FROM node:19.5.0
ENV TZ=Asia/Tokyo
WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]

EXPOSE 3000