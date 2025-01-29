# Books API

## Overview
This is a simple RESTful API for managing books, built using **Node.js** and **Express.js**. It follows best practices for API design, error handling, and validation. The API uses an in-memory data store, meaning data will not persist across server restarts.

## Features
- List all books
- Get book details by ID
- Add a new book
- Update an existing book
- Delete a book
- Validation for required fields
- Error handling with meaningful messages
- Basic security (CORS support and input sanitization)

## Technologies Used
- **Node.js (v16+)**
- **Express.js** (for routing)
- **Jest** (for testing)

## Installation & Setup
### Prerequisites
- Node.js (v16 or later) installed
- npm (Node Package Manager)

### Steps
1. Clone the repository or extract the ZIP file.
```sh
cd books-api
```
2. Install dependencies:
```sh
npm install
```
3. Start the server:
```sh
npm start
```
4. Run tests:
```sh
npm test
```

## API Endpoints
### Base URL: `http://localhost:3000/api/books`

| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | `/`           | Get all books |
| GET    | `/:id`        | Get book by ID |
| POST   | `/`           | Add a new book |
| PUT    | `/:id`        | Update a book |
| DELETE | `/:id`        | Delete a book |

### Example Book Object
```json
{
  "id": 1,
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925
}
```

## Assumptions
- No database is required; data is stored in memory.
- ID is auto-generated.
- API follows RESTful design principles.

## License
This project is for assessment purposes only.

## Author
**Sakuna Thejan**

