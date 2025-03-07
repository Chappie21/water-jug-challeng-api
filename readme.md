# API Water Jug Challenge

A RESTful API to solve the classic Water Jug Riddle using Node.js, Express, and TypeScript.

## Prerequisites

### 1. Install Node.js

- **Recommended Version:** Node.js 22.13.0 (LTS)

- **Official Download:** [Node.js Website](https://nodejs.org/en/)

#### Using NVM (Node Version Manager):

```bash

nvm install 22.13.0

nvm use 22.13.0

```

#### Verify Installation:

```bash

node -v  # Should output v22.13.0 or higher

npm -v   # Verify npm version (bundled with Node.js)

```

---

## Setup & Configuration

### 1. Install Dependencies

```bash

npm install

```

### 2. Environment Variables

Create a `.env` file in the project root with the following variable:

```env

PORT=3000  # Default port (modify as needed)

```

---

## Running the API

### Development Mode (Hot Reload)

```bash

npm run dev

```

- **Behavior:**

- Automatically compiles TypeScript to JavaScript.

- Restarts the server on file changes using `node --watch`.

### Production Build

```bash

npm run build  # Compiles code to ./dist

npm run start  # Starts the production server

```

---

## API Endpoint

### Solve Water Jug Problem

**Endpoint:** `POST /api/resolve`

#### Request Body:

```json

{

    "bucketX": 5,

    "bucketY": 3,

    "goalZ": 4

}

```

- **Parameters:**

- `bucketX` (integer): Capacity of the first jug.

- `bucketY` (integer): Capacity of the second jug.

- `goalZ` (integer): Target amount to measure.

#### Success Response:

```json

{

    "message": "resolved!!!",

    "solution": [

        {"quantityX": 0, "quantityY": 3, "explanation": "Fill bucket Y"},

        {"quantityX": 3, "quantityY": 0, "explanation": "Transfer from Y to X"},

        {"quantityX": 3, "quantityY": 3, "explanation": "Fill bucket Y"},

        {"quantityX": 5, "quantityY": 1, "explanation": "Transfer from Y to X"},

        {"quantityX": 0, "quantityY": 1, "explanation": "Empty bucket X"},

        {"quantityX": 1, "quantityY": 0, "explanation": "Transfer from Y to X"},

        {"quantityX": 1, "quantityY": 3, "explanation": "Fill bucket Y"},

        {"quantityX": 4, "quantityY": 0, "explanation": "Transfer from Y to X (solved)"}

    ]

}

```

#### Error Response:

```json

{

    "errorCode": "P0004",
    "message": "The problem has no solution."

}

```

---

## Key Features

- **Efficient Algorithm:** Finds the optimal steps to measure the target volume.

- **Input Validation:** Checks for positive integers and valid configurations.

- **Error Handling:** Clear error messages for unsolvable cases or invalid inputs.

---

## Deployment

1. Build the project:

```bash

npm run build

```

2. Start the server:

```bash

npm run start

```

3. Access the API at `http://localhost:<PORT>/api/resolve`.

---

## Notes

- **Hot Reload:** Uses Node.js's native `--watch` flag for development.

- **Environment:** Configure the port via `.env` (default: 3000).