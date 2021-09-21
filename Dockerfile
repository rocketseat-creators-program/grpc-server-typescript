FROM node:16-alpine
RUN mkdir -p /app
COPY server/ /app/server/
COPY proto/ /app/proto/
WORKDIR /app/server
RUN npm install
EXPOSE 50051
ENTRYPOINT [ "npm", "start" ]
