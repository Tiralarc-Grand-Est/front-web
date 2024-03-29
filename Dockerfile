FROM node:17-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm ci

# Copying source files
ADD . /usr/src/app/

# Building app
EXPOSE 3000

# Running the app
CMD "npm" "run" "build-start"
