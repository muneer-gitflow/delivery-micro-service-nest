FROM node:22.9.0-alpine3.20

ARG APP_NAME
ENV APP_NAME=${APP_NAME}

WORKDIR /usr/src/app

# Copy package.json, yarn.lock, and .yarnrc.yml (if exists)
COPY package.json yarn.lock .yarnrc.yml* ./

# Install Yarn 3.6.4
RUN corepack enable && corepack prepare yarn@3.6.4 --activate

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

CMD ["sh", "-c", "yarn start:dev ${APP_NAME}"]