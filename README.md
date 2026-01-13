# GigFlow – Mini Freelance Marketplace Platform

GigFlow is a mini full-stack freelance marketplace application where clients can create gigs, freelancers can place bids, and clients can hire freelancers.

This project was developed as part of the **Full Stack Development Internship Assignment at ServiceHive**.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Create Gigs (Client)
- Place Bids on Gigs (Freelancer)
- Hire Freelancer by accepting a bid
- MongoDB database with proper relationships
- Clean and responsive UI using React & Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT Authentication
- Cookie-based Authentication

---

## 📂 Project Structure

This repository contains both frontend and backend code:

- `client/` – React frontend
- `server/` – Express backend

---

## ⚙️ Environment Variables

# Server Configuration
PORT=5000
NODE_ENV=development

# Database (placeholder – no real credentials)
MONGO_URI=mongodb://localhost:27017/gigflow

# Authentication
JWT_SECRET=this_is_a_dummy_jwt_secret_for_demo_purposes_only
JWT_EXPIRES_IN=7d

# Frontend URL
CLIENT_URL=http://localhost:3000

# File Uploads (dummy Cloudinary values)
CLOUDINARY_CLOUD_NAME=dummy_cloud_name
CLOUDINARY_API_KEY=1234567890
CLOUDINARY_API_SECRET=dummy_cloudinary_secret

# Email (dummy values)
EMAIL_SERVICE=gmail
EMAIL_USER=dummy@email.com
EMAIL_PASS=dummy_email_password

