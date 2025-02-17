
![Screenshot 2025-02-17 052842](https://github.com/user-attachments/assets/6eec2480-7653-4078-a2fc-090cfb105f7a)
# ontheproperty

## Description

A full-stack application where users can register, log in, upload products, and get email notifications. The frontend is built with **Next.js**, the backend is powered by **Express.js**, and the application also includes **Tailwind CSS** for styling. This project uses **JWT Authentication** for user login, **multer** for handling product image uploads, and **Nodemailer** to send email notifications.

## Features

- User Authentication (Register, Login)
- Product Upload with Image
- Email Notifications using Nodemailer
- Responsive Design with Tailwind CSS
- Admin Panel for managing products

## Tech Stack

### Frontend:
- **Next.js** (React Framework)
- **Tailwind CSS** (For Styling)

### Backend:
- **Express.js** (Node.js Web Framework)
- **Multer** (File Upload Middleware)
- **Nodemailer** (Sending Email)

### Database:
- **MongoDB** (For storing user data and products)

---

## Installation

Follow these steps to get the project up and running.

### 1. Clone the repository

```bash
git clone https://github.com/vcwaleed/ontheproperty.git
cd ontheproperty

MONGO_URI=mongodb://localhost:27017/yourdb
JWT_SECRET=your_jwt_secret
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=587
MAIL_USER=your_mailtrap_username
MAIL_PASS=your_mailtrap_password ```


