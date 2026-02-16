# 🍱 Cloud Kitchen – Full Stack Web Application

A professional full stack website developed for a local Cloud Kitchen business as part of **Future Interns – Full Stack Task 3 (2026)**.

This project demonstrates real-world full stack development including frontend, backend, authentication, and database integration.

---

## 📌 Project Overview

This Cloud Kitchen website allows customers to:

- Browse categorized food items
- View real food images
- Place orders online
- Experience a clean and responsive UI

It also includes an Admin panel to:

- Login securely (JWT authentication)
- View customer orders
- Manage menu items

---

## 🚀 Tech Stack

### 💻 Frontend
- React.js
- React Router
- Axios
- CSS (Custom Styling)

### 🖥 Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt (Password Hashing)

### 🗄 Database
- MySQL
- Foreign Key Relationships

---

## ✨ Features

### 👩‍🍳 Customer Features
- Home Page with Call-to-Action
- Categorized Menu:
  - Starters
  - Main Course
  - Desserts
  - Beverages
- Food Images (Locally Stored)
- Place Order Form
- Responsive Layout

### 🔐 Admin Features
- Secure Login (JWT Token)
- View All Orders
- Manage Menu Items
- Dashboard Overview

---

## 📂 Project Structure

cloud-kitchen/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── services/
│
└── server/ # Node + Express Backend
├── config/
├── controllers/
├── routes/
├── middleware/
└── utils/


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/sruthi20-07/FUTURE_FS_03.git


---

### 2️⃣ Backend Setup

cd server
npm install
npm run dev


Backend runs on:
http://localhost:5000


---

### 3️⃣ Frontend Setup

cd client
npm install
npm start


Frontend runs on:
http://localhost:3000


---

## 🔐 Admin Login Credentials

Email: admin@gmail.com
Password: admin123


---

## 🧠 Key Concepts Implemented

- RESTful API structure
- MySQL relational schema
- Foreign key constraints
- Secure password hashing
- JWT-based authentication
- React state management
- API integration using Axios
- Git version control workflow

---

## 📈 Future Improvements

- Payment Integration
- Order Status Tracking
- Admin Analytics Dashboard
- Image Upload System
- Deployment to Cloud (Vercel / Render)

## 📢 Internship Submission

This project was built as part of:

**Future Interns – Full Stack Web Development Task 3 (2026)**
