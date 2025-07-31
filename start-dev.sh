#!/bin/bash

# Start development servers for both frontend and backend

echo "Starting Portfolio Development Servers..."

# Function to kill background processes on exit
cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

# Set up trap to cleanup on script exit
trap cleanup EXIT INT TERM

# Start backend server
echo "Starting backend server..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 2

# Start frontend server
echo "Starting frontend server..."
npm run dev &
FRONTEND_PID=$!

echo "Servers started!"
echo "Frontend: http://localhost:5173"
echo "Backend: http://localhost:5000"
echo "Admin Dashboard: http://localhost:5000/admin/dashboard"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for background processes
wait