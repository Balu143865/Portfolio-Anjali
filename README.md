# Portfolio Website - Anjali

A modern, professional, and highly responsive personal portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Design**: Clean, modern UI with smooth animations
- **Dark/Light/System theme toggle** - 3 modes
- **Mobile-first responsive design**
- **Smooth scrolling and transitions** (Framer Motion)
- **Sections**: Hero, About, Education, Skills, Projects, Experience, Contact, Footer
- **Animated typing effect**
- **Professional animations** throughout all sections
- **Download Resume button**
- **Scroll progress bar**

## 📁 Folder Structure

```
Portfolio-Anjali/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── profile2.jpeg
│   │   ├── RESUME.pdf
│   │   └── project images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Icons.js
│   │   │   ├── Loading.js
│   │   │   ├── Footer.js
│   │   │   ├── Navbar.js
│   │   │   ├── ScrollProgressBar.js
│   │   │   └── sections/
│   │   │       ├── About.js
│   │   │       ├── Contact.js
│   │   │       ├── Education.js
│   │   │       ├── Experience.js
│   │   │       ├── Hero.js
│   │   │       ├── Projects.js
│   │   │       └── Skills.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── ThemeContext.js
│   │   ├── pages/
│   │   │   ├── Admin.js
│   │   │   ├── Home.js
│   │   │   └── NotFound.js
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Git

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## 🖥️ Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project to Vercel
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import the project to Netlify
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy

### GitHub Pages
1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

## 📄 License

MIT License

## 🙋‍♀️ Support

For support or questions, feel free to reach out!