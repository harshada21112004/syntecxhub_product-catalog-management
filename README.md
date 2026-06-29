# syntecxhub_product-catalog-management
# 🛒 Product Catalog Management API

A secure and scalable RESTful API built using **Node.js**, **Express.js**, and **MongoDB** for managing product catalogs efficiently.

This project was developed as **Task-2** during my internship at **SyntecxHub**.

---

## 🚀 Features

✅ User Registration & Login

✅ JWT Authentication

✅ Protected API Routes

✅ Product CRUD Operations

✅ Search Products by Name

✅ Search Products by Category

✅ Pagination Support

✅ MongoDB Aggregation Framework

✅ Input Validation

✅ Error Handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- Bcrypt.js
- Thunder Client

---

## 📁 Project Structure

```bash
product-catalog-management/
│
├── src/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   └── validators/
│       ├── authValidator.js
│       └── productValidator.js
│
├── .env.example
├── README.md
├── package.json
└── server.js
```
---

## 🔐 Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## 📦 Product APIs

### Create Product

```http
POST /api/products
```

### Get All Products

```http
GET /api/products
```

### Get Single Product

```http
GET /api/products/:id
```

### Update Product

```http
PUT /api/products/:id
```

### Delete Product

```http
DELETE /api/products/:id
```

---

## 🔍 Search Functionality

Search products by name:

```http
GET /api/products?keyword=laptop
```

Search products by category:

```http
GET /api/products?category=Electronics
```

---

## 📄 Pagination

Get products with pagination:

```http
GET /api/products?page=1&limit=5
```

Example Response:

```json
{
  "currentPage": 1,
  "totalPages": 2,
  "totalProducts": 10
}
```

---

## 📊 MongoDB Aggregation

Get product statistics:

```http
GET /api/products/stats
```

Example Response:

```json
{
  "totalProducts": 10,
  "averagePrice": 25000,
  "maxPrice": 60000,
  "minPrice": 650
}
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/product-catalog-management-api.git
```

### Navigate to Project Folder

```bash
cd product-catalog-management-api
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Run Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:5000
```

---

## 🧪 API Testing

All APIs were tested using **Thunder Client**.



---

## 🎯 Internship Task Requirements Covered

✔ RESTful API Development

✔ Search Functionality

✔ Pagination

✔ MongoDB Aggregation

✔ Secure API Endpoints

✔ Input Validation

---

## 👩‍💻 Author

**Harshada**

Backend Developer | MERN Stack Enthusiast

---

