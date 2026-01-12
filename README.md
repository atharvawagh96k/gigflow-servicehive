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
gigflow-servicehive/
├── client/ # Frontend (React + Vite)
└── server/ # Backend (Node.js + Express)

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
