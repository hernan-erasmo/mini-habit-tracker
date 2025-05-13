# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve to run the application
RUN npm install -g serve

# Copy built app from build stage
COPY --from=build /app/build ./build

EXPOSE 3000

# Use serve to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
