Overview
The Seller Review Application is a full-stack MERN application that allows users to:

Register and log in securely.
View a list of sellers.
Search sellers by name.
View seller ratings and reviews.

Features
User Authentication: Secure login and signup with JWT.
Seller List: Display a list of sellers with ratings and reviews.
Search Functionality: Search sellers by name in real-time.
Dynamic Star Ratings: Display star ratings dynamically.

Prerequisites
Ensure you have the following installed:

Node.js
MongoDB (local or cloud)
React

Installation and Setup
1. Clone the Repository
bash
git clone https://github.com/yourusername/seller-review-app.git
cd seller-review-app
2. Backend Setup
Navigate to the project root.
Install dependencies:
npm install
3.Start the backend server
npm start
4.The backend will run on http://localhost:4000.

Frontend Setup
1.Navigate to the frontend directory (if applicable).
2.Install dependencies:
npm install 
3.Start the frontend server
npm start
The frontend will run on http://localhost:5173.

Folder Structure
Backend
/
├── index.js # Entry point for the backend
├── package.json # Backend dependencies
└── README.md # Project documentation

Frontend
frontend/
├── src/
│ ├── Components/
│ │ ├── Navbar/
│ │ ├── Footer/
│ │ ├── Pages/
│ │ ├── LoginSignup/
│ │ ├── Home/
│ │ ├── SellerList/
│ ├── App.jsx
│ ├── App.css
│ ├── index.js
├── public/
│ └── index.html
├── package.json
└── README.md



API Endpoints
User Authentication
POST /signup: Register a new user.
POST /login: Log in and retrieve a JWT.
Sellers
GET /sellers: Retrieve the list of sellers.

Run the Project
1.Start the backend server: node index.js
2.Start the frontend:npm run dev

Contributors
Chittra Priya.K - MERN Stack Developer
