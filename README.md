# SensAI: AI Career Coach

**SensAI** is a comprehensive AI powered career development platform that helps professionals build resumes, generate cover letters, prepare for interviews, and gain industry-specific insights using advanced AI models.

## 🎯 About SensAI

SensAI combines modern web technologies with cutting-edge AI to provide personalized career guidance and professional development tools. Whether you're a student, job seeker, or career changer, SensAI offers intelligent features to accelerate your professional growth.

## ✨ Features

- **📄 Resume Builder** - Create and manage professional resumes with AI-powered suggestions
- **📧 AI Cover Letter Generator** - Generate customized cover letters for job applications
- **🎤 Mock Interview Prep** - Practice interviews with real-time feedback and performance analytics
- **📊 Industry Insights** - Get market analysis, salary ranges, and skill requirements by industry
- **🔐 Secure Authentication** - User authentication and data management with Clerk
- **📱 Responsive Design** - Fully responsive UI optimized for all devices
- **🌙 Dark Mode Support** - Built-in theme switching for better user experience
- **⚡ Real-time Updates** - Live preview of resumes and instant AI feedback

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework with app directory
- **React 19** - UI library with latest features
- **Tailwind CSS 4** - Utility-first styling
- **ShadCN UI** - Accessible component primitives
- **React Hook Form** - Efficient form management
- **Zod** - Type-safe schema validation
- **Recharts** - Data visualization
- **Lucide React** - Icon library

### Backend & Services
- **Node.js** - Runtime environment
- **Prisma** - ORM for database management
- **Clerk** - Authentication and user management
- **Google Generative AI (Gemini 2.5)** - AI model for content generation
- **Inngest** - Background job scheduling

### Deployment
- **Vercel** - Hosting and serverless functions

## 🚀 Live Demo

🔗 **SensAI Live:** https://sensai-lyart.vercel.app/

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Clerk account for authentication
- Google API key for Generative AI

### Installation

```bash
# Clone the repository
git clone https://github.com/Manan0p/sensAI.git
cd sensai

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Fill in your API keys and credentials

# Generate Prisma client
npx prisma generate

# Run database migrations (if needed)
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file with:

```env
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Database
DATABASE_URL=your_database_url

# AI
GEMINI_API_KEY=your_gemini_api_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

## 🔑 Key Features Explained

### Resume Builder
- Drag-and-drop interface for adding work experience, education, and projects
- Real-time markdown preview
- PDF export functionality
- Customizable templates

### Cover Letter Generator
- AI-powered generation based on job description
- Company and role-specific customization
- Multiple revision options
- Instant preview and download

### Mock Interviews
- Adaptive questioning based on industry
- Real-time performance analytics
- Score tracking and improvement suggestions
- Detailed feedback on answers

### Industry Insights
- Real salary data by role and location
- Market demand analysis
- Trending skills and certifications
- Career growth projections

## 🚢 Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for full details.

The MIT License allows you to use, modify, and distribute this software freely, with minimal restrictions. A copy of the license is included in the repository root.

**Copyright © 2025 Manan**

## 👨‍💻 Author

Created with ❤️ for career professionals everywhere.

## 🙏 Acknowledgments

- Google Generative AI for powering the AI features
- Clerk for authentication
- Vercel for hosting
- All the amazing open-source libraries used in this project

---

**Ready to transform your career? Visit [SensAI](https://sensai-lyart.vercel.app/) today!**  
