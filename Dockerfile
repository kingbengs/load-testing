# Builder stage
FROM node:12.16.3-alpine as builder

ARG ENVIRONMENT=non-prod

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    bash \
    git \
    openssh \
    make

COPY package*.json ./

# Storing node modules on a separate layer will prevent unnecessary npm installs on each build
RUN npm ci

COPY . .

# This is a workaround to Docker not supporting conditionals
# The appropriate robots.txt will be copied to robots.txt so it can be used later.
# The reason for this is that the staging websites should not be indexed to avoid duplicate content
# SEO issue
RUN make robots-${ENVIRONMENT}

# Build the static website
RUN npm run build

# Setup our final container
FROM nginx:1.19.7-alpine

ENV APP_PATH /app

# Remove default nginx website and configuration
RUN rm -rf /etc/nginx/conf.d/* && \
    rm -f /etc/nginx/nginx.conf && \
    rm -rf /usr/share/nginx/html/*

# Copy our default nginx config
COPY ops/nginx/default.conf /etc/nginx/conf.d/
COPY ops/nginx/nginx.conf /etc/nginx/

EXPOSE 80

# From the 'builder' stage copy over the artifacts to the default nginx public folder
COPY --from=builder public/ /usr/share/nginx/html/
COPY --from=builder static/.well-known/ /usr/share/nginx/html/.well-known/
COPY --from=builder static/publickey.txt /usr/share/nginx/html/
COPY --from=builder static/robots.txt /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
