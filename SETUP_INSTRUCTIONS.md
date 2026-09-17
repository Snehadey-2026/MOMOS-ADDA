# MOMO'S ADDA - Local Development Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.9 or higher) - [Download](https://www.python.org/)
- **MongoDB** (v5.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **VS Code** - [Download](https://code.visualstudio.com/)
- **Git** - [Download](https://git-scm.com/)
- **Yarn** (Package Manager) - Install: `npm install -g yarn`

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Download/Clone the Project

1. Open VS Code
2. Open Terminal (View → Terminal or `` Ctrl+` ``)
3. Navigate to your desired folder:
   ```bash
   cd ~/Documents  # or any folder you prefer
   ```
4. Clone or copy the project files into a folder named `momos-adda`

---

### Step 2: Open Project in VS Code

1. In VS Code: **File → Open Folder**
2. Select the `momos-adda` folder
3. VS Code will open the project

---

### Step 3: Setup Backend (FastAPI + MongoDB)

#### 3.1 Start MongoDB

**Windows:**
```bash
# Open Command Prompt as Administrator
net start MongoDB
```

**macOS/Linux:**
```bash
# Start MongoDB service
brew services start mongodb-community  # macOS with Homebrew
# OR
sudo systemctl start mongod  # Linux
```

**Verify MongoDB is running:**
```bash
mongosh
# You should see MongoDB shell. Type 'exit' to close.
```

#### 3.2 Setup Python Virtual Environment

Open a **new terminal** in VS Code (Terminal → New Terminal):

```bash
# Navigate to backend folder
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate

# macOS/Linux:
source venv/bin/activate

# You should see (venv) in your terminal prompt
```

#### 3.3 Install Python Dependencies

```bash
# Make sure you're in the backend folder with venv activated
pip install --upgrade pip
pip install -r requirements.txt
```

#### 3.4 Configure Backend Environment

1. Check if `backend/.env` file exists
2. If not, create it with this content:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=momos_adda_db
   CORS_ORIGINS=*
   ```

#### 3.5 Start Backend Server

```bash
# Make sure you're in backend folder with venv activated
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Expected output:**
```
INFO:     Uvicorn running on http://0.0.0.0:8001 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Application startup complete.
```

✅ **Backend is now running on:** `http://localhost:8001`

**Test it:** Open browser and go to `http://localhost:8001/api/` - you should see `{"message":"Momo's Adda API"}`

---

### Step 4: Setup Frontend (React + Vite)

#### 4.1 Open a New Terminal

In VS Code: **Terminal → New Terminal** (Keep the backend terminal running)

```bash
# Navigate to frontend folder
cd frontend
```

#### 4.2 Install Node Dependencies

```bash
# Install all dependencies using Yarn
yarn install

# This will take 2-3 minutes
```

#### 4.3 Configure Frontend Environment

1. Check if `frontend/.env` file exists
2. Update it to point to your local backend:
   ```env
   VITE_BACKEND_URL=http://localhost:8001
   ```

#### 4.4 Start Frontend Development Server

```bash
# Make sure you're in frontend folder
yarn dev
# OR
yarn start
```

**Expected output:**
```
  VITE v7.1.12  ready in 214 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

✅ **Frontend is now running on:** `http://localhost:3000`

---

## 🌐 Access the Application

1. Open your browser
2. Go to: **http://localhost:3000**
3. You should see the MOMO'S ADDA homepage with the slideshow! 🎉

---

## 📂 Project Structure

```
momos-adda/
├── backend/                 # FastAPI Backend
│   ├── server.py           # Main API file
│   ├── requirements.txt    # Python dependencies
│   ├── .env               # Environment variables
│   └── venv/              # Virtual environment (created by you)
│
├── frontend/               # React + Vite Frontend
│   ├── src/
│   │   ├── pages/         # All page components
│   │   ├── components/    # Reusable components
│   │   ├── App.jsx        # Main App component
│   │   └── index.jsx      # Entry point
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   ├── vite.config.js     # Vite configuration
│   └── .env              # Environment variables
│
└── SETUP_INSTRUCTIONS.md  # This file
```

---

## 🔧 VS Code Recommended Extensions

Install these extensions for better development experience:

1. **Python** (Microsoft)
2. **Pylance** (Microsoft)
3. **ES7+ React/Redux/React-Native snippets**
4. **Tailwind CSS IntelliSense**
5. **ESLint**
6. **Prettier - Code formatter**
7. **MongoDB for VS Code**

---

## 🐛 Troubleshooting

### Issue: MongoDB not starting

**Solution:**
```bash
# Windows: Run as Administrator
net start MongoDB

# macOS:
brew services restart mongodb-community

# Linux:
sudo systemctl restart mongod
```

---

### Issue: Port 8001 or 3000 already in use

**Solution:**
```bash
# Find and kill the process using the port

# Windows:
netstat -ano | findstr :8001
taskkill /PID <PID_NUMBER> /F

# macOS/Linux:
lsof -ti:8001 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

---

### Issue: Python packages not installing

**Solution:**
```bash
# Upgrade pip first
python -m pip install --upgrade pip

# Then try installing again
pip install -r requirements.txt
```

---

### Issue: Yarn command not found

**Solution:**
```bash
# Install yarn globally
npm install -g yarn

# Verify installation
yarn --version
```

---

### Issue: Frontend not loading styles

**Solution:**
```bash
# In frontend folder
rm -rf node_modules
yarn install
yarn dev
```

---

## 🎯 Testing the Application

### Test Backend API

Open browser or use curl:
```bash
# Test main endpoint
curl http://localhost:8001/api/

# Test menu endpoint
curl http://localhost:8001/api/menu

# Test feedback endpoint
curl http://localhost:8001/api/feedback
```

### Test Frontend Pages

Navigate to these URLs in your browser:
- Homepage: `http://localhost:3000/`
- Menu: `http://localhost:3000/menu`
- Gallery: `http://localhost:3000/gallery`
- Franchise: `http://localhost:3000/franchise`
- Feedback: `http://localhost:3000/feedback`
- About: `http://localhost:3000/about`

---

## 📱 Features to Test

✅ **Homepage:**
- Auto-rotating slideshow
- Navigation buttons
- Click "Explore Menu" and "Franchise Inquiry" buttons

✅ **Menu Page:**
- Switch between VEG and NON-VEG tabs
- Scroll through all menu items

✅ **Gallery:**
- View all food images
- Check "Videos Coming Soon" section

✅ **Franchise Form:**
- Fill and submit the form
- Check MongoDB for saved data

✅ **Feedback Form:**
- Click star ratings
- Submit feedback
- Check MongoDB for saved data

✅ **Navigation:**
- Click all menu links
- Test mobile responsive menu (resize browser window)

✅ **WhatsApp Button:**
- Click the green WhatsApp button
- Should open WhatsApp with number 6261256832

✅ **Footer:**
- Click social media icons
- Verify contact information

---

## 🗄️ View Database Data

### Using MongoDB Compass (GUI)

1. Download and install [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to: `mongodb://localhost:27017`
3. Select database: `momos_adda_db`
4. View collections:
   - `franchise_inquiries`
   - `feedbacks`
   - `menu_items`

### Using MongoDB Shell

```bash
# Open MongoDB shell
mongosh

# Switch to database
use momos_adda_db

# View all collections
show collections

# View franchise inquiries
db.franchise_inquiries.find().pretty()

# View feedbacks
db.feedbacks.find().pretty()

# Count documents
db.franchise_inquiries.countDocuments()
```

---

## 🛑 Stopping the Servers

### Stop Frontend
- Go to frontend terminal
- Press `Ctrl + C`

### Stop Backend
- Go to backend terminal
- Press `Ctrl + C`
- Deactivate virtual environment: `deactivate`

### Stop MongoDB (optional)
```bash
# Windows:
net stop MongoDB

# macOS:
brew services stop mongodb-community

# Linux:
sudo systemctl stop mongod
```

---

## 🔄 Restarting the Application

1. **Start MongoDB** (if not running)
2. **Backend Terminal:**
   ```bash
   cd backend
   source venv/bin/activate  # macOS/Linux
   # OR
   venv\Scripts\activate  # Windows
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

3. **Frontend Terminal:**
   ```bash
   cd frontend
   yarn dev
   ```

---

## 📝 Development Tips

### Hot Reload
- **Frontend:** Changes auto-refresh instantly (Vite HMR)
- **Backend:** Changes auto-reload (uvicorn --reload flag)

### Debugging
- Use VS Code debugger
- Frontend: Browser DevTools (F12)
- Backend: Python print statements or VS Code debugger

### Code Formatting
```bash
# Frontend
cd frontend
yarn format  # if configured

# Backend
cd backend
black server.py  # Python formatter
```

---

## 🎨 Customization

### Change Colors
Edit `/frontend/src/App.css` - look for color values:
- Primary: `#DC2626` (red)
- Secondary: `#F97316` (orange)

### Change Fonts
Edit `/frontend/src/App.css` - update Google Fonts import

### Add Menu Items
Edit `/frontend/src/pages/MenuPage.jsx` - add items to `vegMenu` or `nonVegMenu` arrays

### Update Contact Info
Edit `/frontend/src/components/Footer.jsx` - update phone, email, address

---

## 📞 Need Help?

If you encounter any issues:
1. Check all prerequisites are installed
2. Verify MongoDB is running
3. Check terminal for error messages
4. Ensure ports 8001 and 3000 are not in use
5. Review the Troubleshooting section above

---

## 🎉 Success!

You should now have:
- ✅ Backend API running on port 8001
- ✅ Frontend app running on port 3000
- ✅ MongoDB connected and working
- ✅ Full-stack application ready for development

**Happy Coding! 🚀**
