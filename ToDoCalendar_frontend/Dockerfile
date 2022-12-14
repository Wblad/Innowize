FROM node:16 as build-stage
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
ARG REACT_APP__USE_HASH_ROUTER
ENV REACT_APP__USE_HASH_ROUTER=${REACT_APP__USE_HASH_ROUTER}
ARG REACT_APP__URL_BACKEND_SERVER
ENV REACT_APP__URL_BACKEND_SERVER=${REACT_APP__URL_BACKEND_SERVER}
COPY . /app/
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

