#!/bin/bash

# Quick setup script for the portfolio project
# This script sets up Node.js 20 and starts the development server with pnpm

set -e

echo "==============================================="
echo "🚀 Portfolio Development Setup"
echo "==============================================="

# Activate nvm
echo "📦 Activating Node.js 20..."
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  \. "$NVM_DIR/nvm.sh"
  nvm use 20
  echo "✓ Node.js $(node --version)"
  echo "✓ npm $(npm --version)"
  echo "✓ pnpm $(pnpm --version)"
else
  echo "❌ nvm not found. Please install nvm first."
  exit 1
fi

# Navigate to project
echo ""
echo "📂 Navigating to project..."
cd "$(dirname "$0")"
echo "✓ Working directory: $(pwd)"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📥 Installing dependencies with pnpm..."
  echo "(This is much faster than npm!)"
  pnpm install
  echo "✓ Dependencies installed"
else
  echo "✓ Dependencies already installed"
fi

# Start dev server
echo ""
echo "🎉 Starting development server..."
echo "📱 Open browser at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "==============================================="
echo ""

pnpm dev
