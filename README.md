
# OfficeCare (E-commerce App) - MERN Stack Project


## 🧾 About

Office Care will be an integrated e-commerce application that tries to meet your every need for everything related to offices, from furniture and stationery to technology products. This app will facilitate seamless shopping for all kinds of office needs for an individual or even a business enterprise.

---

## 🚀 Features

### Core Features:
- Product Management (Add, View, Wishlist)
- Cart and Order Confirmation
- Review System (Upcoming)
- Business Bulk Orders
- Product Recommendations
- Real-time Order Tracking

---

## 🛠️ Technology Stack

### 🔹 Front-End:
- React
- Next.js
- Tailwind CSS

### 🔸 Back-End:
- Node.js
- Express.js

### 🗃️ Database:
- MongoDB

---

## 📈 Project Phases & Progress

Development is structured into distinct phases for better planning and tracking.

### 🟢 **Phase 1: Core Shopping Features** ⏳ _(In Progress)_

🎯 Goal: Build the minimum required features for a fully working e-commerce platform. Users should be able to register, log in, browse products, add items to a cart, and place an order.

#### ⏳ Frontend (Client Side)
    - ✅ User Registration Page (sign-up)
    - ✅ User Login Page (sign-in)
    - ✅ Logout Functionality
    - ✅ Product Listing Page (browse all products)
    - ✅ Product Detail Page (view product info: image, price, description)
    - ✅ Shopping Cart Page (add/remove items, view total)
    - ✅ Place Order Page (checkout & confirm order)

#### ⏳ Backend (Server Side)
    - ✅ User Registration API (with email check & bcrypt password hashing)
    - ✅ User Login API (JWT authentication)
    - ✅ Product Management API (admin can add products)
    - ✅ Get Products API (fetch all products)
    - ✅ Cart API (add, remove, update cart items)
    - ✅ Order Placement API (store orders in DB with status like Pending)

### 🟡 **Phase 2: Advanced User & Business Features** ⏳ _(In Progress)_

🎯 Goal: Build on top of the base by introducing more interactive and business-oriented functionality.

#### ⏳ Frontend (Client Side)
- ⏳ Product Review UI
- ⏳ Recommended Products Component
- ⏳ Order Tracking UI
- ⏳ Bulk Order UI for Business Accounts

#### ⏳ Backend (Server Side)
- ⏳ Add Product Review Endpoint
- ⏳ Logic for Product Recommendations
- ⏳ Real-Time Order Tracking API
- ⏳ Bulk Order Discount Logic

---

## 🧰 Getting Started

To run the project locally, follow the instructions below:

### 📦 Prerequisites
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 🔧 Installation Steps

1. **Clone the Repository**
    
    Open your terminal and clone the repository:
    ```bash
    git clone <repository-url>
    ```
    Replace <repository-url> with the GitHub repository URL.

2. **Navigate to the Client Folder**

    Change directory to the client folder:
    ```bash
    cd client

3. **Install Client Dependencies**

    Install the necessary packages for the React.js/Next.js front-end(client-side):
    ```bash
    npm install

4. **Navigate to the Server Folder**
    
    Return to the root directory and navigate to the server folder:
    ```bash
    cd ../server

5. **Install Server Dependencies**

    Install the required Node.js and Express.js packages:
    ```bash
    npm install mongoose nodemon

6. **Set Up Environment Variables**

    Create a .env file in the server folder with the following keys:
    ```bash
    MONGO_URI=<your-mongodb-connection-string>
    PORT=5000
    ```

    Replace <your-mongodb-connection-string> with the URL of your MongoDB database.

7. **Run the Application**
- Start the server:

    ```bash
    npm run dev
    ```

    This will start the back-end server with **nodemon** for auto-restart during development.
- Start the client (in a separate terminal, from the client folder):

    ```bash
    npm run dev

8. **Access the Application**
- Front-End: The React.js/Next.js app will typically be available at http://localhost:3000.
- Back-End: The Express.js server will run on http://localhost:5000 or the port specified in your .env file.

---

## 🤝 Contributing

Contributions are always welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of changes"
4. Push to the branch:
    ```bash
    git push origin feature-name
5. Open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## 📬 Contact

For any inquiries, reach out to us at:
- **Email:** [JekenMaharjan](maharjanjeken@gmail.com)
- **Github:** [Jekode](https://github.com/JekenMaharjan)

---

## 🌐 Connect with Me

> 🌐 Portfolio: [**jekenmaharjan.com.np**](https://jekenmaharjan.com.np)

> [![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jekenmaharjan/)  [![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github)](https://github.com/JekenMaharjan)  [![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=twitter)](https://x.com/JekenMaharjan)  [![Linktree](https://img.shields.io/badge/-Connect-43E660?style=flat-square&logo=linktree&logoColor=white)](https://linktr.ee/JekenMaharjan)

📬 Email: [maharjanjeken@gmail.com](mailto:maharjanjeken@gmail.com)

