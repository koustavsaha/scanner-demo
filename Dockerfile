# Use an older version of Node that has its own vulnerabilities
FROM node:14-alpine

# Set up the working directory
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
# This will install the old, vulnerable versions of express and lodash
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# The command to run the application
CMD [ "npm", "start" ]