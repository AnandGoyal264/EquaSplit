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
ackend/
│── src/
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── group.controller.js
│ │ ├── expense.controller.js
│ │ └── balance.controller.js
│ │
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── group.routes.js
│ │ ├── expense.routes.js
│ │ └── balance.routes.js
│ │
│ ├── models/
│ │ ├── User.model.js
│ │ ├── Group.model.js
│ │ ├── Expense.model.js
│ │ └── Balance.model.js
│ │
│ ├── services/
│ │ ├── split.service.js
│ │ └── balance.service.js
│ │
│ ├── middlewares/
│ │ └── auth.middleware.js
│ │
│ ├── app.js
│ └── server.js
│
│── .env
│── package.json


---

## 🔐 Authentication Flow

- JWT‑based authentication
- Token generated on **login / register**
- Token validated using middleware on protected routes

### Auth Routes

---

## 👥 Group Management APIs

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/groups` | Create a new group |
| GET | `/api/groups` | Get all groups of logged‑in user |
| GET | `/api/groups/:groupId` | Get group details |
| POST | `/api/groups/:groupId/add-member` | Add member to group |

---

## 💸 Expense Management APIs

Supports **Equal**, **Exact**, and **Percentage** splits.

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/expenses` | Add expense to group |

### Split Types
- `EQUAL`
- `EXACT`
- `PERCENT`

---

## 📊 Balance & Settlement APIs

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/balances` | View balances (owe / owed) |
| POST | `/api/balances/settle` | Settle balance |

---

## 🧠 Balance Logic (Ledger System)

- Every expense creates ledger entries
- Balances are stored as:
  - `fromUser` → owes money
  - `toUser` → is owed money
- Supports partial & full settlements

---

🌐 CORS Configuration
Backend allows requests from:

Local development

Vercel deployment

Custom domain

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://equisplit-puce.vercel.app",
    "https://equisplit.anandgoyal.online"
  ]
}));

### Environment Variables (`.env`)


---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://your-frontend-domain.com
