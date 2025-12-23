# 📘 EqualSplit – Expense Sharing Application

EqualSplit is a **full‑stack MERN application** that helps users **split group expenses**, track **who owes whom**, and **settle balances** easily — inspired by apps like Splitwise.

---

## 🚀 Features

### 🔐 Authentication
- User registration & login using JWT
- Secure protected routes

### 👥 Groups
- Create groups
- Add members to groups
- View group details & members

### 💸 Expenses
- Add expenses inside a group
- Supported split types:
  - **Equal Split**
  - **Exact Amount Split**
  - **Percentage Split**

### 📊 Balances
- View **You Owe**
- View **You Are Owed**
- Automatic balance calculation

### 🤝 Settlement
- Settle full or partial balances
- Ledger updates automatically

### 🌐 Deployment
- Frontend deployed on **Vercel (Custom Domain)**
- Backend deployed on **Render**
- MongoDB Atlas for database

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- CORS enabled

### Database
- MongoDB Atlas

---

## 📁 Project Structure

### Backend
backend/
│── src/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── services/
│ ├── middlewares/
│ ├── app.js
│ └── server.js
│── .env
│── package.json

### Frontend

frontend/
│── public/
│── src/
│ ├── api/
│ ├── components/
│ │ ├── auth/
│ │ ├── group/
│ │ ├── expense/
│ │ └── balance/
│ ├── pages/
│ ├── context/
│ ├── hooks/
│ └── main.jsx
---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://equisplit-puce.vercel.app/login

│── index.html
│── package.json
│── vercel.json

▶️ Running the Project Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/equal-split.git
cd equal-split
2️⃣ Backend Setup
cd backend
npm install
npm run dev
Backend runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
Frontend runs on:

http://localhost:5173
🔑 API Endpoints
Authentication
POST   /api/auth/register
POST   /api/auth/login
Groups
POST   /api/groups
GET    /api/groups
GET    /api/groups/:groupId
POST   /api/groups/:groupId/add-member
Expenses
POST   /api/expenses
Balances
GET    /api/balances
POST   /api/balances/settle
🧪 Example Expense Payloads
Equal Split
{
  "groupId": "groupId",
  "amount": 900,
  "description": "Dinner",
  "splitType": "EQUAL",
  "splits": []
}
Exact Split
{
  "groupId": "groupId",
  "amount": 900,
  "description": "Dinner",
  "splitType": "EXACT",
  "splits": [
    { "userId": "u1", "amount": 300 },
    { "userId": "u2", "amount": 600 }
  ]
}
Percentage Split
{
  "groupId": "groupId",
  "amount": 900,
  "description": "Dinner",
  "splitType": "PERCENT",
  "splits": [
    { "userId": "u1", "percent": 50 },
    { "userId": "u2", "percent": 50 }
  ]
}
🌍 Deployment Notes
CORS Configuration (Backend)
app.use(cors({
  origin: [
    "https://your-vercel-domain.vercel.app",
    "https://your-custom-domain.com"
  ]
}));
SPA Routing Fix (Vercel)
vercel.json

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
🧠 Key Concepts
Owe → Money you need to pay

Owed → Money others need to pay you

Ledger‑based balance calculation

Secure JWT authentication

📌 Future Improvements
Better UI (Material UI / Tailwind)

Expense history per group

Notifications

Real‑time updates (Socket.io)

Charts & analytics

👨‍💻 Author
Anand Goyal

