# 📝 Blog Application

A **full-fledged blog application** built with **React.js** and **Appwrite** as the backend service.

The application allows users to create an account, log in securely, create and manage blog posts, edit or delete their own posts, and write content using a **Rich Text Editor (RTE)**.

This project was built to practice and demonstrate real-world frontend development concepts such as **React, Redux, React Router, form handling, authentication, CRUD operations, Appwrite, and reusable components**.

---

## 🚀 Live Demo

**Live Demo:** `full-fledge-application-with-appwri.vercel.app`

---


## ✨ Features

### 🔐 Authentication

* User Signup
* User Login
* User Logout
* Persistent authentication state
* Protected routes
* User-specific post management

### 📝 Blog Posts

* Create new blog posts
* View all published posts
* View individual post details
* Update existing posts
* Delete posts
* Post ownership handling

### ✍️ Rich Text Editor

* Rich text content creation
* Formatting support
* Easy content editing
* Integrated with the post creation/update workflow

### 🖼️ Image Management

* Upload featured images for posts
* Store images using Appwrite Storage
* Display uploaded images in posts
* Delete unused images when necessary

### 🧭 Routing

* React Router based navigation
* Dynamic post routes
* Protected routes for authenticated users
* Navigation between application pages

### 🎯 State Management

* Redux for global authentication state
* Centralized user session management
* React Hook Form for efficient form handling

### 📱 Responsive UI

* Responsive design
* Reusable UI components
* Clean and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **React Router**
* **Redux Toolkit**
* **React Hook Form**
* **Tailwind CSS**
* **Vite**

### Backend / BaaS

* **Appwrite**

### Appwrite Services Used

* Appwrite Authentication
* Appwrite Databases
* Appwrite Storage

### Other Tools

* Git
* GitHub
* ESLint
* npm

---

## 🏗️ Application Architecture


User
 │
 ▼
React Application
 │
 ├── React Router
 │
 ├── Redux Toolkit
 │      └── Authentication State
 │
 ├── React Hook Form
 │      └── Form Management
 │
 ├── Reusable Components
 │
 └── Appwrite Service Layer
          │
          ├── Authentication
          │
          ├── Database
          │
          └── Storage


---

## 📂 Project Structure


src/
│
├── appwrite/
│   └── config.js
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── Input/
│   ├── Container/
│   ├── PostCard/
│   ├── Select/
│   └── RTE/
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AllPosts.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   └── Post.jsx
│
├── store/
│   └── authSlice.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## 🔑 Core Functionality

### 1. User Registration

New users can create an account using the signup form.


Signup
   ↓
Appwrite Authentication
   ↓
User Account Created
   ↓
Application


---

### 2. User Login

Existing users can log in using their credentials.

Login Form
   ↓
Appwrite Authentication
   ↓
User Session
   ↓
Redux Authentication State
   ↓
Application


---

### 3. Create Post

Authenticated users can create blog posts containing:

* Title
* Slug
* Featured image
* Rich text content
* Status

The post data is stored in the Appwrite database while images are stored using Appwrite Storage.

---

### 4. Update Post

Users can edit their existing posts and update:

* Title
* Content
* Featured image
* Status
* Other post information

---

### 5. Delete Post

Users can delete their posts.

When necessary, the associated image is also removed from Appwrite Storage.

---

### 6. Rich Text Editing

The application includes a **Rich Text Editor** that allows users to create properly formatted blog content instead of entering plain text.

---

## 🔒 Authentication & Authorization

The application uses **Appwrite Authentication** to manage user sessions.

Authenticated users can access protected functionality such as:

* Creating posts
* Editing posts
* Deleting posts

The application also checks the current authenticated user before allowing post-management operations.



---


## 👨‍💻 Author

**Gulfam Khan**

B.Tech – Computer Science & Engineering

### Connect With Me

* GitHub: `https://github.com/gulfamkhan77309`
* LinkedIn: `https://www.linkedin.com/in/gulfam-khan-934a23285`


