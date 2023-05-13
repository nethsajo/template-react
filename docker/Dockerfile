# Parent Image
FROM node:16-buster-slim

# Go to /app directory.
WORKDIR /app

# Add permission to the /app folder.
RUN chmod -R 775 /app

# Install pnpm globally.
RUN npm i -g pnpm@7.27.1

# Copy all required files for installation.
COPY package.json /app

# Install all the dependencies.
RUN pnpm install

# Expose the container to port 3000.
EXPOSE 4000

# Run the app
CMD ["pnpm", "dev"]