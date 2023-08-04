FROM node:13.14-alpine as builder

WORKDIR '/app'

COPY package*.json ./
RUN npm ci
COPY . .
RUN npx ng build --prod

FROM nginx:stable-alpine

RUN rm -rf nginx/conf.d/default.conf
COPY nginx/conf.d/default.conf /etc/nginx/conf.d

COPY --from=builder /app/dist/apartnomore-client /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
