# Getting Started

## Prerequisites

Before running the project locally, make sure you have the following installed:

* Node.js (v18 or later)
* Bun
* MongoDB (local or cloud instance)

---

## Run the Project Locally

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AIChatBot
```

### 2. Install Dependencies

#### Frontend

```bash
bun install
```

#### Backend

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory and add the following variables:

```env
MONGODB_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

---

## Database Setup

This project uses **MongoDB** as the database and **Mongoose** as the ODM (Object Data Modeling) library.

1. Start your MongoDB server or use a MongoDB Atlas cluster.
2. Add the MongoDB connection string to the `.env` file.
3. Start the backend server.

The database and required collections are initialized automatically by Mongoose when the application starts. No manual migration or seed commands are required.

---

## Start the Application

### Backend

```bash
npm run dev
```

### Frontend

```bash
bun run dev
```

The frontend will communicate with the backend API, which in turn interacts with the Gemini model.

---

# Project Architecture

The application follows a simple layered architecture to keep responsibilities separated and the codebase maintainable.

```
Frontend (React + Bun)
        │
        ▼
Express API
        │
        ▼
Chat Controller
        │
        ▼
Gemini Service
        │
        ├── Google Gemini 2.5 API
        └── MongoDB (Mongoose)
```

### Request Flow

1. The user sends a message from the frontend.
2. The request reaches the Express backend.
3. The Chat Controller processes the request.
4. The Gemini Service forwards the user's message to the Gemini 2.5 model.
5. The AI-generated response is returned to the client.
6. Chat data is stored in MongoDB using Mongoose.

---

# Backend Structure

```
src/
│
├── controller/
│   └── chatController.js
│
├── service/
│   └── geminiService.js
│
├── model/
│   └── chatModel.js
│
├── utils/
│
├── database/
│   └── databaseConnection.js
│
├── routes/
│
└── server.js
```

### Folder Responsibilities

* **controller/** – Handles incoming HTTP requests and responses.
* **service/** – Contains the business logic and communicates with the Gemini API.
* **model/** – Defines MongoDB schemas using Mongoose.
* **database/** – Establishes the MongoDB connection.
* **routes/** – Defines API endpoints.
* **utils/** – Contains helper and utility functions.
* **server.js** – Application entry point.

---

# LLM Notes

### Provider

* Google Gemini

### Model

* Gemini 2.5

### Prompting Strategy

The application sends the user's message directly as the prompt to the Gemini 2.5 model. The model generates a response based on the provided input, which is then returned to the frontend. This straightforward prompting approach keeps the implementation simple while allowing the model to generate contextually relevant responses.

---

# Trade-offs

To keep the project focused and lightweight, the following features were intentionally left out:

* No authentication or user management
* No caching layer
* No streaming AI responses
* No Docker support
* Basic error handling
* No API rate limiting
* Single LLM provider (Google Gemini)
* Minimal logging

---

# If I Had More Time

Future improvements that would enhance the project include:

* Adding comprehensive unit tests
* Adding integration tests
* Improving the user interface and user experience
* Implementing authentication and user accounts
* Supporting streaming AI responses
* Adding Redis caching for improved performance
* Introducing rate limiting and enhanced security
* Dockerizing the application for easier deployment
* Supporting multiple LLM providers (OpenAI, Anthropic, Gemini, etc.)
* Improving logging and monitoring for production environments
