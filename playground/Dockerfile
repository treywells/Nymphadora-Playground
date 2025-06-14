# Step 1: Build the React app
FROM node:20 AS builder

WORKDIR /playground

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all app files
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

# Copy built React files to Nginx's public folder
COPY --from=builder /playground/dist /usr/share/nginx/html

# Optional: Replace default nginx config (use only if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
