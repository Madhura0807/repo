# Madhura Kale — Developer Portfolio
---

## 🚀 Key Features & Highlights

1. **IDE / VS Code Simulated Interface**:
   - **Titlebar**: macOS traffic light buttons (`.dot.r`, `.dot.y`, `.dot.g`), active file breadcrumb, dark/light theme switch, command palette shortcut (`Ctrl+K`), and quick action buttons.
   - **Activity Bar**: Left rail containing Explorer, Search, Git status, Certifications, GitHub, and LinkedIn links.
   - **Explorer Sidebar**: Collapsible file directory hierarchy reflecting resume sections (`about.md`, `skills.json`, `projects/`, `research_paper.py`, `education.yaml`, `certifications.json`, `achievements.yaml`, `contact.sh`).
   - **Editor Tabs**: Synchronized tab bar highlighting current document view as you navigate or scroll.
   - **Status Bar**: Live VS Code status bar showing git branch (`main*`), error diagnostics, spaces, encoding, Python version, and internship availability status.

2. **Interactive Command Palette (`Ctrl+K`)**:
   - Quick navigation between sections (`about`, `skills`, `projects`, `research`, `education`, `certifications`, `contact`).
   - Quick actions to copy contact email and toggle Dark / Light themes with keyboard navigation.

3. **Source of Truth (Resume Aligned)**:
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
   - **Interactive Certifications & Lightbox**:
     - *Building AI Agents with Snowflake* (GeeksforGeeks, ID: `9205d190a15e0969c4ada0d9ac17c180`)
     - *The Joy of Computing Using Python* (NPTEL / Swayam / IIT Madras — Elite Award, 70% Score)
     - *SQL (Advanced)* (HackerRank, ID: `1FE845F48FE1`)
     - *Fundamentals of Agents* (Hugging Face Agents Course)
     - *Delta Full Stack Web Development* (Apna College, ID: `67fa1790bef8484a5a084146`)
     - *Generative AI & Agents* (Microsoft)
     - *Database Foundations* (Oracle Academy)
     - Each card features hover zoom, "View Certificate" high-res modal lightbox with ESC key dismissal, and direct official PDF links.
   - **Interactive Terminal & Contact**: Shell card with JSON card output, copy email/phone buttons, and direct mailto form.

4. **Performance & Technology**:
   - Pure Semantic HTML5, CSS3 Variables, and Vanilla ES6+ JavaScript.
   - Zero external libraries or heavy bundles — loads instantly and runs at silky 60fps.
   - Fully responsive across desktop, laptop, tablet, and mobile with drawer navigation.

---

## 📂 Project Structure

```text
repo/
├── index.html                  # Core portfolio page & IDE simulated interface
├── styles.css                  # Theme tokens, VS Code styling & responsive layouts
├── script.js                   # Tab sync, theme switch, command palette & lightbox
├── Madhura_Kale_Resume.pdf     # Official downloadable verified resume
├── profile.jpg                 # Personal profile photograph
├── certificates/               # High-res certificate previews and official PDFs
│   ├── apna-college-delta-fullstack.pdf
│   ├── apna-college-delta-fullstack.png
│   ├── geeksforgeeks-snowflake-ai-agents.pdf
│   ├── geeksforgeeks-snowflake-ai-agents.png
│   ├── hackerrank-sql-advanced.png
│   ├── huggingface-agents.webp
│   ├── nptel-python-iit-madras.pdf
│   └── nptel-python-iit-madras.png
└── README.md                   # Documentation and deployment guide
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

To host your portfolio live on GitHub Pages:
1. In the repository settings on GitHub (`https://github.com/Madhura0807/repo/settings/pages`), under **Source**, select **Deploy from a branch**.
2. Select branch `main` and folder `/ (root)`, then click **Save**.
3. Your site will automatically go live at `https://madhura0807.github.io/repo/`!
