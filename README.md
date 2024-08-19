---

# 🎥 Videotube

**Videotube** is a robust and scalable backend platform built with Node.js, Express.js, and MongoDB. This project provides comprehensive and secure backend infrastructure for building a video-sharing platform, similar to YouTube. The platform enables users to upload, manage, and share videos, and interact with others through comments and likes.

## 🚧 Project Status

🔨 This project is currently under development. Features and improvements are being added regularly.

## Schema Diagram

[View Schema Diagram](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## 🚀 Features

- 📹 **Upload Videos**: Share your videos with the world.
- 🎥 **Watch Videos**: Enjoy videos uploaded by others.
- 👍 **Like**: Express your opinions on videos.
- 💬 **Comment**: Engage in discussions with the community.
- 🔍 **Search**: Find videos by keywords.
- 📊 **Trending**: Discover trending videos.
- 🛠 **Admin Panel**: Control content and manage users.

## 🛠️ Technologies Used

- **Frontend**: 
  - React
  - Redux Toolkit
  - Tailwind CSS
  - React Hook Form

- **Backend**: 
  - Node.js
  - Express
  - MongoDB
  - JWT (JSON Web Tokens)
  - Bcrypt (Password hashing)

## 🏗️ Dependencies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- CORS
- Cookie-parser
- Multer

## Installation

Install the project dependencies by running:

```bash
npm install
```

## Running Locally

Go to the project directory

```bash
  cd youtube-backend
```

Start the server

```bash
  npm run dev
```

## Deployment

To deploy this project, run:

```bash
  npm run deploy
```

## Tech Highlights

- Powered by Node.js and Express.js for the backend.
- Utilizes MongoDB as the primary database storage solution.
- Implements modern web development best practices and design patterns.
- Extensive use of MongoDB's aggregation framework for data processing and analysis.
- Features robust authentication and authorization mechanisms to ensure secure data access.

## Lessons Learned

- **Node.js**: Learn how to build a robust and scalable backend application, handle requests and responses, manage dependencies, and use various Node.js modules.
- **Express.js**: Learn how to use Express.js to create a RESTful API, handle HTTP requests, and implement middleware functions.
- **MongoDB**: Learn how to use MongoDB as a NoSQL database, including creating collections, performing CRUD operations, and using MongoDB's aggregation framework.
- **API Design**: Learn how to design and implement a robust API, handle requests and responses, manage errors, and implement authentication and authorization.
- **Database Modeling**: Learn how to design and implement a database schema for a complex application like a video-sharing platform.
- **Problem-Solving**: Learn how to break down complex problems into smaller, manageable tasks, and develop solutions to those tasks.
- **Code Organization**: Learn how to organize your code logically and maintainably, using techniques such as modularization, dependency injection, and separation of concerns.
- **Error Handling**: Learn how to handle errors and exceptions, including logging errors, notifying users, and implementing retry mechanisms.
- **Testing**: Learn how to write unit tests and integration tests for your code, using testing frameworks such as Jest or Mocha.

## API Reference

### User Signup

```http
POST /api/v1/users/signup
```

| Parameter    | Type     | Description                |
| ------------ | -------- | -------------------------- |
| `username`   | `string` | **Required**. Unique.       |
| `firstname`  | `string` | **Required**.               |
| `lastname`   | `string` | **Required**.               |
| `avatar`     | `image`  | **Required**. Max size 20kb |
| `coverimage` | `image`  | **Required**. Max size 20kb |
| `password`   | `string` | **Required**.               |
| `email`      | `string` | **Required**. Unique.       |

### User Login

```http
POST /api/v1/users/login
```

| Parameter  | Type     | Description                    |
| ---------- | -------- | ------------------------------ |
| `email`    | `string` | **Required**. If not username.  |
| `username` | `string` | **Required**.                  |
| `password` | `string` | **Required**. If not email.     |

### User Logout

```http
POST /api/v1/users/logout
```

### User Profile

```http
GET /api/v1/users/profile/{{username}}
```

### Subscribe or Unsubscribe Channel

```http
POST /api/v1/subscription/subscribe/{{id}}
```

### Video Create

```http
POST /api/v1/videos/{{username}}/upload
```

| Parameter      | Type     | Description       |
| -------------- | -------- | ----------------- |
| `title`        | `string` | **Required**       |
| `description`  | `string` | **Required**       |
| `videofile`    | `video`  | **Required**       |
| `thumbnail`    | `image`  |                   |
| `isPublic`     | `string` |                   |

### Video Delete

```http
DELETE /api/v1/videos/{{username}}/{{id}}/delete
```

### Video Get by ID

```http
GET /api/v1/videos/{{id}}
```

### Video Get User's Videos

```http
GET /api/v1/videos/{{username}}
```

### Video Comment On Video

```http
POST /api/v1/videos/video/{{id}}/comment
```

| Parameter  | Type     | Description                |
| ---------- | -------- | -------------------------- |
| `comment`  | `string` | **Required**               |

### Video Delete Comment

```http
DELETE /api/v1/videos/video/{{id}}/comment
```

### Video Like and Unlike Video

```http
POST /api/v1/videos/video/{{id}}/like
```

### Post Create

```http
POST /api/v1/posts/post
```

| Parameter     | Type     | Description                |
| ------------- | -------- | -------------------------- |
| `post`        | `image`  | **Required**               |
| `description` | `string` |                            |

### Post Edit

```http
POST /api/v1/posts/post/{{id}}
```

| Parameter     | Type     | Description                |
| ------------- | -------- | -------------------------- |
| `description` | `string` |                            |

### Post Delete

```http
DELETE /api/v1/posts/post/{{id}}
```

### Post Get by ID

```http
GET /api/v1/posts/post/{{id}}
```

### Post Get User Posts

```http
GET /api/v1/posts/post/{{username}}

```
