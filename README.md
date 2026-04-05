# Portfolio Website - Anjali

A modern, professional, and highly responsive personal portfolio website built with React.js, TailwindCSS, Node.js, Express.js, and MongoDB.

## 🚀 Features

- **Design**: Clean, modern UI with smooth animations
- **Dark/Light mode toggle**
- **Mobile-first responsive design**
- **Smooth scrolling and transitions** (Framer Motion)
- **Sections**: Hero, About, Skills, Projects, Experience, Contact, Footer
- **Fully functional contact form** (store data in MongoDB)
- **Admin dashboard** to add/edit/delete projects
- **Authentication** (JWT login for admin)
- **GitHub API integration** to show repositories
- **SEO optimization** (React Helmet)
- **Loading animations / skeleton UI**
- **Download Resume button**
- **Animated typing effect**
- **Scroll progress bar**

## 📁 Folder Structure

```
Portfolio-Anjali/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── Contact.js      # Contact model
│   │   ├── Project.js      # Project model
│   │   └── User.js        # User model
│   ├── routes/
│   │   ├── auth.js        # Authentication routes
│   │   ├── contact.js    # Contact routes
│   │   └── projects.js   # Project routes
│   ├── .env              # Environment variables
│   ├── package.json
│   └── server.js         # Express server
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Icons.js       # Icon components
    │   │   ├── Loading.js    # Loading component
    │   │   ├── Footer.js    # Footer component
    │   │   ├── Navbar.js   # Navbar component
    │   │   ├── ScrollProgressBar.js
    │   │   └── sections/
    │   │       ├── About.js
    │   │       ├── Contact.js
    │   │       ├── Experience.js
    │   │       ├── Hero.js
    │   │       ├── Projects.js
    │   │       └── Skills.js
    │   ├── context/
    │   │   ├── AuthContext.js
    │   │   └── ThemeContext.js
    │   ├── pages/
    │   │   ├── Admin.js
    │   │   ├── Home.js
    │   │   └── NotFound.js
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    ├── .env
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   # Copy from .env.example or create manually
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   JWT_EXPIRE=7d
   ```

4. Start MongoDB (if local):
   ```bash
   # For Windows
   net start MongoDB
   
   # For Mac/Linux
   mongod
   ```

5. Start the backend server:
   ```bash
   npm run dev   # Development with nodemon
   # OR
   npm start    # Production
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `.env` file (if needed):
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (private)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (private)
- `PUT /api/projects/:id` - Update project (private)
- `DELETE /api/projects/:id` - Delete project (private)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (private)
- `DELETE /api/contact/:id` - Delete contact (private)

## 🔐 Admin Login

To login to the admin dashboard:
1. First, register a new user using Postman/cURL:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username":"admin","email":"admin@example.com","password":"yourpassword"}'
   ```
2. Navigate to `/admin` on the frontend
3. Login with your credentials

## 🖥️ Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Import the project to Vercel
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy

### Backend (Render/Railway)
1. Push your code to GitHub
2. Create a new Web Service
3. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables
5. Deploy

### Database (MongoDB Atlas)
1. Create a free cluster on MongoDB Atlas
2. Get the connection string
3. Add it to your backend's `.env`

## 🛠️ Usage

- **Hero Section**: Shows name, role, animated typing effect, and CTA buttons
- **About Section**: Profile image and skill categories
- **Skills Section**: Progress bars for different skill categories
- **Projects Section**: Project cards with GitHub API integration
- **Experience Section**: Timeline of work and education
- **Contact Section**: Functional contact form with validation

## 📄 License

MIT License

## 🙋‍♀️ Support

For support or questions, feel free to reach out!