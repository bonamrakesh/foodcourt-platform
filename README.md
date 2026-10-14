# Gather & Go — Food Court Platform

A responsive multi-restaurant food court website built with React + Vite, Express, and Supabase.
This version intentionally has **no admin dashboard**. Restaurant and menu data are maintained in `frontend/src/data/seedData.js`; orders can be saved to Supabase when configured.

## Requirements
- Node.js LTS
- Git
- VS Code
- A Supabase project (for persistent orders)

## 1. Install frontend packages
```powershell
cd frontend
npm install
npm install react-router-dom lucide-react
```

## 2. Configure frontend
Copy `frontend/.env.example` to `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## 3. Install backend packages
Open a second terminal:
```powershell
cd backend
npm install
```

Copy `backend/.env.example` to `backend/.env`, then set your Supabase URL and service role key. Never put the service role key in the frontend `.env` or commit it to GitHub.

## 4. Create the database
In Supabase, open SQL Editor and run `database/schema.sql`.

## 5. Run the project
Terminal 1:
```powershell
cd backend
npm run dev
```
Terminal 2:
```powershell
cd frontend
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Notes
- Without Supabase credentials, the frontend still runs and browsing/cart UI work; checkout shows a helpful API/database setup error if you submit an order.
- Demo food images are remote Unsplash URLs.
- This starter is not a payment processor. Add a trusted payment provider before accepting real online payments.
