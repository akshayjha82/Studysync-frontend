# StudySync 📚  
**Collaborative Study Platform for Dynamic Learning Groups**  

![StudySync Demo](https://via.placeholder.com/800x400.png?text=StudySync+Demo)  
*Replace with actual demo GIF/video*

---

## 🚀 Features  
### 🧑‍🤝‍🧑 Smart Group Allocation  
- Auto-group students by **domain**, **study time**, **year**, & **group size**  
- Dynamic reallocation when ratings increase by 200+ points  

### 💬 Real-Time Collaboration  
![Chat Demo](https://via.placeholder.com/400x200.png?text=Chat+Interface)  
- Socket.IO powered chat rooms per group  
- File sharing (PDFs/images/docs) with previews  
- PDF summarization using AI (BART model)  

### 🧪 Adaptive Quiz System  
// Sample quiz flow
const quiz = {
domain: "Computer Science",
questions: 10,
scoring: "5 marks/question",
ratingImpact: "+50 max boost"
};

### 📈 Skill-Based Rating System  
| Rating Range | Tier       | Benefits                |
|--------------|------------|-------------------------|
| 1000-1200    | Novice     | Basic group access      |
| 1200-1400    | Scholar    | Priority matching       |
| 1400+        | Mentor     | Group leadership roles  |

---

## ⚙️ Tech Stack  
### Frontend  
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)  
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)  
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io)  

### Backend  
![Express](https://img.shields.io/badge/Express-000000?logo=express)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)  
![Airflow](https://img.shields.io/badge/Airflow-017CEE?logo=apacheairflow)  

---

## 🗄️ Database Schema  
### `users` Table  
| Column               | Type       | Description                     |
|----------------------|------------|---------------------------------|
| rating               | INTEGER    | Starts at 1000, skill metric    |
| preferred_study_time | TEXT       | Morning/Afternoon/Night         |
| group_id             | UUID       | Current study group reference   |

### `messages` Table  
CREATE TABLE messages (
message TEXT NOT NULL,
sender TEXT REFERENCES users(username),
summary TEXT -- AI-generated for PDFs
);

---

## 🛠️ Installation  
1. **Clone Repo**  
git clone https://github.com/yourusername/studysync.git

2. **Backend Setup**  
cd backend
npm install
cp .env.example .env # Configure PostgreSQL & JWT

3. **Frontend Setup**  
cd frontend
npm install
cp .env.example .env # Set VITE_API_URL


4. **Run**  
Backend
node server.js

Frontend
npm run dev


---

## 🌐 API Endpoints  
| Method | Path                | Description                     |
|--------|---------------------|---------------------------------|
| POST   | /api/upload         | File upload + AI summarization  |
| GET    | /api/quiz/:domain   | Get domain-specific questions   |
| WS     | /socket.io          | Real-time chat connection       |

---

## 📜 License  
MIT License - See [LICENSE](LICENSE) for details  

---

> "StudySync revolutionizes collaborative learning through intelligent grouping and real-time interaction."  
> – Project Vision Statement  

**Happy Studying!** 🎓🚀  
