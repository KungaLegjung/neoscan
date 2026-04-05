# NEOSCAN – AI Resume Analyzer & ATS Optimization Platform

NEOSCAN is a full-stack AI-powered web application that audits resumes against modern recruitment standards and delivers a detailed score across a strict 100-point rubric. Upload your resume, and the platform extracts key content, analyzes skill gaps, keyword density, and professional impact — then returns a structured report in seconds.

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, Vite, Tailwind CSS v4, Framer Motion |
| Backend | Node.js, Express, PDF-Parse, Multer |
| Database | MongoDB, Mongoose |
| AI | Llama 3.3-70B, Groq API |
| Auth | Clerk |

---

## Features

- AI-driven resume scoring with deterministic output for consistent evaluations
- Automated PDF parsing and semantic keyword extraction
- Detailed gap analysis across technical skills, impact framing, and ATS readability
- Secure user authentication and persistent scan history
- Futuristic glassmorphic UI with smooth micro-interactions

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Groq API key
- Clerk account

### Installation

# Clone the repository
git clone https://github.com/KungaLegjung/NeoScan.git
cd NeoScan

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

### Environment Variables

Create a `.env` file in the server directory:

GROQ_API_KEY=your_groq_api_key
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key

Create a `.env` file in the client directory:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

### Run the App

# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev

---

## Usage

1. Sign up or log in via Clerk Auth
2. Upload your resume as a PDF
3. Receive a detailed AI-generated audit report with a score out of 100
4. Track your optimization progress across multiple scans

---

## License

MIT
