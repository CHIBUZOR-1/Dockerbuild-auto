FROM node:22.13.1 as frontend-build

WORKDIR /app

# Install frontend dependencies
COPY clientside/package*.json ./clientside/
RUN cd clientside && npm install

# Set environment variable for Vite
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Copy frontend source code and build
COPY clientside ./clientside
RUN cd clientside && npm run build

# Stage 2: Set up the backend
FROM node:22.13.1

WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy backend source code
COPY backend ./backend

# Copy frontend build to backend public directory
COPY --from=frontend-build /app/clientside/dist ./clientside/dist

# Set environment variables
ENV NODE_ENV=production

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "backend/index.js"]