# Backend Simposio

A Node.js and TypeScript backend project for Simposio application.

## Project Structure

```
backend-simposio/
├── src/                  # TypeScript source files
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Express middleware
│   ├── models/           # Data models
│   ├── routes/           # Route definitions
│   └── index.ts          # Application entry point
├── dist/                 # Compiled JavaScript output
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Development

To run the project in development mode with automatic reloading:

```
npm run dev
```

### Production Build

To build the project for production:

```
npm run build
```

To start the production server:

```
npm start
```

## API Endpoints

- `GET /`: Health check endpoint

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=3000              # Server port
NODE_ENV=development   # Environment (development, production)
```
