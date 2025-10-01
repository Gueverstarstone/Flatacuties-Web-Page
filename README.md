# Character Manager Web Application

A simple web application that demonstrates CRUD (Create, Read, Update) operations using JavaScript Fetch API and JSON Server.

## Features

- 📝 View all characters with their ID, name, and image
- ➕ Add new characters to the database
- ✏️ Update existing characters
- 🔄 Real-time UI updates
- 🎯 Simple and intuitive form interface

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation & Setup

### 1. Install JSON Server Globally

```bash
npm install -g json-server
```

### 2. Start the JSON Server

Navigate to your project directory and run the following command:

```bash
json-server --watch db.json --port 3000
```

---

## API Endpoints

The **JSON Server** automatically provides the following standard **REST endpoints** for managing your character data:

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/characters` | Retrieves a list of all characters. |
| **GET** | `/characters/:id` | Retrieves a single character by its unique ID. |
| **POST** | `/characters` | Creates a new character record. |
| **PUT** | `/characters/:id` | Replaces an entire character record by its ID. |
| **PATCH** | `/characters/:id` | Partially updates a character record by its ID. |
| **DELETE** | `/characters/:id` | Deletes a character record by its ID. |

## Project Directory Structure

Here is the file structure for the `character-manager` project:



character-manager/
├── index.html          # Main HTML file
├── script.js           # JavaScript application logic
├── db.json             # JSON database file
└── README.md           # This file