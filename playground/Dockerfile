# Step 1: Build the React app
FROM node:20

WORKDIR /playground

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all app files
COPY . .

EXPOSE 3000

# Build the app
ENTRYPOINT ["npm","run","dev","--","--host"]

