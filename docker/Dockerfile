FROM node:18-alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json and yarn.lock to work directory
COPY package.json .
COPY yarn.lock .

# Install all Packages
RUN yarn install

# Copy all other source code to work directory
ADD . /usr/src/app
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]