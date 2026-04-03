# Student Management System

This project is a Node.js + Express + MongoDB (Mongoose) Student Management System built as four exercises:

- `exercise1-basic-crud`
- `exercise2-advanced-queries`
- `exercise3-schema-design`
- `exercise4-aggregation`

## Folder Structure

```text
.
|-- exercise1-basic-crud
|   `-- index.js
|-- exercise2-advanced-queries
|   `-- queries.js
|-- exercise3-schema-design
|   |-- README.md
|   `-- schemas
|       |-- Course.js
|       |-- Grade.js
|       `-- Professor.js
|-- exercise4-aggregation
|   `-- aggregation.js
|-- index.js
|-- package.json
|-- postman-examples.json
`-- README.md
```

## Requirements

- Node.js installed
- MongoDB running locally on `mongodb://127.0.0.1:27017`

If you want to use another MongoDB connection string, set:

```powershell
$env:MONGODB_URI="your_mongodb_connection_string"
```

## Installation

```bash
npm install
```

## Run The Main App

```bash
node index.js
```

The server starts on:

```text
http://localhost:3000
```

## Exercise 1: Basic CRUD

All logic for Exercise 1 is written in one file:

- `exercise1-basic-crud/index.js`

It includes:

- Express server
- MongoDB connection
- Mongoose schema
- CRUD routes
- Sample test data seeding

### API Endpoints

#### 1. Add New Student

`POST /students`

Example JSON:

```json
{
  "name": "Ananya Verma",
  "email": "ananya.verma@example.com",
  "age": 20,
  "gpa": 3.7,
  "courses": ["Mathematics", "Database Systems"],
  "city": "Pune"
}
```

#### 2. Get All Students

`GET /students`

#### 3. Find Student By Email

`GET /students/email/:email`

Example:

```text
GET /students/email/ananya.verma@example.com
```

#### 4. Update Student GPA

`PUT /students/:id`

Example JSON:

```json
{
  "gpa": 3.9
}
```

#### 5. Delete Student

`DELETE /students/:id`

### Sample Test Data

These students are inserted automatically when the collection is empty:

```json
[
  {
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "age": 20,
    "gpa": 3.8,
    "courses": ["Mathematics", "Physics", "Computer Science"],
    "city": "Delhi"
  },
  {
    "name": "Priya Singh",
    "email": "priya.singh@example.com",
    "age": 21,
    "gpa": 3.4,
    "courses": ["English", "History", "Political Science", "Economics"],
    "city": "Mumbai"
  },
  {
    "name": "Rohan Mehta",
    "email": "rohan.mehta@example.com",
    "age": 22,
    "gpa": 3.1,
    "courses": ["Biology", "Chemistry", "Statistics", "Psychology", "Sociology", "Philosophy"],
    "city": "Bengaluru"
  },
  {
    "name": "Sneha Patel",
    "email": "sneha.patel@example.com",
    "age": 19,
    "gpa": 3.9,
    "courses": ["Computer Science", "Data Structures", "Algorithms", "Database Systems"],
    "city": "Ahmedabad"
  }
]
```

## Exercise 2: Advanced Queries

File:

- `exercise2-advanced-queries/queries.js`

Run it with:

```bash
node exercise2-advanced-queries/queries.js
```

Queries included:

- Students with GPA between 3.0 and 3.5
- Students with more than 5 courses
- Top 10 students by GPA
- Count students by city

## Exercise 3: Schema Design

Separate schema files are available in:

- `exercise3-schema-design/schemas/Course.js`
- `exercise3-schema-design/schemas/Professor.js`
- `exercise3-schema-design/schemas/Grade.js`

### Schema Summary

#### Course

```json
{
  "name": "Database Systems",
  "credits": 4,
  "prerequisites": ["ObjectId", "ObjectId"]
}
```

#### Professor

```json
{
  "name": "Dr. Meera Iyer",
  "departments": ["Computer Science", "Data Science"]
}
```

#### Grade

```json
{
  "student": "ObjectId",
  "course": "ObjectId",
  "grade": "A"
}
```

## Exercise 4: Aggregation

File:

- `exercise4-aggregation/aggregation.js`

Run it with:

```bash
node exercise4-aggregation/aggregation.js
```

Aggregation queries included:

- Average GPA by department
- Most popular courses based on enrollment count
- Student performance report with GPA and course count

Aggregation operators used:

- `$group`
- `$lookup`
- `$sort`
- `$project`

## Postman Examples

Postman-ready JSON examples are provided in:

- `postman-examples.json`

You can import that file into Postman or copy the request bodies directly.
