FROM node:12.16.1

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json and yarn.lock to work directory
COPY package.json .

# Install all Packages
RUN yarn install

# Copy all other source code to work directory
ADD . /usr/src/app
RUN yarn build

CMD [ "yarn", "server" ]
EXPOSE 8080