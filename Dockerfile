FROM node:15-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm ci --only=production

# Copying source files
COPY ./.next /usr/src/app/.next
COPY ./public /usr/src/app/public

# Building app
EXPOSE 3000

# Running the app
CMD "npm" "start"
