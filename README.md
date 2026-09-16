# Madhura Kale — Developer Portfolio

A modern, high-performance personal developer portfolio inspired by [anhnq15.github.io](https://anhnq15.github.io/), tailored for **Madhura Kale** (Computer Engineering Undergraduate, Class of 2027 at AISSMS IOIT Pune) specializing in **Data Science, Machine Learning, Generative AI, and Software Engineering**.

---

## 🚀 Key Features & Highlights

1. **IDE / VS Code Simulated Interface**:
   - **Titlebar**: macOS traffic light buttons (`.dot.r`, `.dot.y`, `.dot.g`), active file breadcrumb, dark/light theme switch, command palette shortcut (`Ctrl+K`), and quick action buttons.
   - **Activity Bar**: Left rail containing Explorer, Search, Git status, Certifications, GitHub, and LinkedIn links.
   - **Explorer Sidebar**: Collapsible file directory hierarchy reflecting resume sections (`about.md`, `skills.json`, `projects/`, `research_paper.py`, `education.yaml`, `certifications.json`, `achievements.yaml`, `contact.sh`).
   - **Editor Tabs**: Synchronized tab bar highlighting current document view as you navigate or scroll.
   - **Status Bar**: Live VS Code status bar showing git branch (`main*`), error diagnostics, spaces, encoding, Python version, and internship availability status.

2. **Source of Truth (Resume Aligned)**:
   - **Education**: B.Tech in Computer Engineering at AISSMS IOIT, Pune (CGPA: 7.34 / 10), MP International (73.67%), Kendriya Vidyalaya Ganeshkhind (90%).
   - **Technical Skills**: Filterable skill chips categorized by Data & Analytics, Machine Learning & CV, Generative AI & LLMs, Programming Languages, Backend, Databases, and Core CS Fundamentals.
   - **6 Applied Projects**:
     - *Customer Churn Analysis and Prediction* (Python, Scikit-learn, XGBoost, Power BI, DAX, SQL)
     - *Legal Document Reader (RAG System)* (FastAPI, RAG, FAISS, Groq LLM, React.js, FastEmbed)
     - *Transaction Intelligence Engine* (Python, NLP, RapidFuzz, Groq LLM)
     - *Sign Language Detection System* (Python, OpenCV, MediaPipe, Scikit-learn)
     - *Student Performance Prediction* (Regression Pipeline, R²: 0.692)
     - *IBM HR Employee Attrition Prediction* (1,470 records, Power BI dashboard)
   - **Peer-Reviewed Research Publication**: Dedicated spotlight card for the paper published in **IJCRT** on *MobileNetV2 Transfer Learning Framework for Plant Leaf Disease Classification*.
   - **Certifications & Leadership**: Microsoft Generative AI, HackerRank SQL Advanced, EY/Edunet Full Stack, Oracle Database Foundations, iConnect Secretary (8+ events, 100+ attendees), 200+ LeetCode DSA solved, and IIT Bombay Advitya Hackathon.
   - **Interactive Terminal & Contact**: Shell card with JSON card output, copy email/phone buttons, and direct mailto form.

3. **Performance & Technology**:
   - Pure Semantic HTML5, CSS3 Variables, and Vanilla ES6+ JavaScript.
   - Zero external libraries or heavy bundles — loads instantly and runs at silky 60fps.
   - Fully responsive across desktop, laptop, tablet, and mobile with drawer navigation.

---

## 📂 Project Structure

```text
madhura-portfolio/
├── index.html       # Complete semantic structure & IDE layout
├── styles.css       # Dark/Light theme variables, layouts & animations
├── script.js        # Tabs sync, theme toggle, copy actions, command palette
└── README.md        # Documentation and deployment guide
```

---

## 💻 How to Preview Locally

You can preview the portfolio by opening `index.html` directly in any web browser, or via Python's built-in HTTP server:

```powershell
# Navigate to the portfolio directory
cd "C:\Users\LENOVO\.gemini\antigravity\scratch\madhura-portfolio"

# Start a local preview server
python -m http.server 8000
```
Then visit `http://localhost:8000` in Chrome, Edge, or Firefox.

---

## 🌐 Deploy to GitHub Pages

To host your portfolio for free on your personal domain (`https://madhura0807.github.io`):

1. Create a new GitHub repository named `Madhura0807.github.io` (or `portfolio`).
2. Push this project folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial release of modern IDE portfolio"
   git branch -M main
   git remote add origin https://github.com/Madhura0807/Madhura0807.github.io.git
   git push -u origin main
   ```
3. Your site will automatically go live at `https://madhura0807.github.io`!
