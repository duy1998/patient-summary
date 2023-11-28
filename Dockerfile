# Use an official Node.js runtime as a parent image
FROM node:13.14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Define the command to run your app
CMD ["npm", "start"]
