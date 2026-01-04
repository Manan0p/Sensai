<<<<<<< HEAD
# SensAI: AI Career Copilot

**SensAI** is a modern AI-powered career platform that helps you **onboard your profile**, **build a resume**, **generate tailored cover letters**, **practice technical interviews**, and **get weekly industry insights** powered by Gemini.
=======
# SensAI: AI Career Coach

**SensAI** is a comprehensive AI powered career development platform that helps professionals build resumes, generate cover letters, prepare for interviews, and gain industry-specific insights using advanced AI models.
>>>>>>> 0492cc0669d74c078e1454d0e71dc090aa6d2870

**🌐 Live Demo:** https://sensai-lyart.vercel.app/

<<<<<<< HEAD
## 🖼️ Product Tour
=======
SensAI combines modern web technologies with cutting edge AI to provide personalized career guidance and professional development tools. Whether you're a student, job seeker, or career changer, SensAI offers intelligent features to accelerate your professional growth.
>>>>>>> 0492cc0669d74c078e1454d0e71dc090aa6d2870

Here’s a quick look at the app experience — from onboarding to insights and AI-assisted writing.

### Landing Page

Clean landing page that introduces SensAI’s workflow and routes you into the platform.

![SensAI Landing Page](public/Landing%20Page.png)

### Resume Builder

Build and update your resume with a markdown editor + live preview, designed for fast iteration.

![SensAI Resume Builder](public/Resume%20Builder.png)

### AI Cover Letter

Generate tailored cover letters by providing the job title, company, and job description — then save and manage past letters.

![SensAI Cover Letter](public/Cover%20Letter.png)

### Interview Prep

Practice technical interview quizzes generated from your industry/skills and track performance across attempts.

![SensAI Interview Prep](public/Interview%20Prep.png)

### Industry Insights

Explore AI-generated market insights (salary ranges, in-demand skills, trends) and keep them fresh via a weekly cron job.

![SensAI Industry Insights](public/Industry%20Insights.png)

---

## 🎯 What This Project Does

SensAI is built around a simple flow: **sign in → onboard your industry profile → get AI guidance across resume, cover letters, interviews, and insights**.

It helps you:
- Create/maintain a resume with a markdown editor + export
- Generate role-specific cover letters from a job description
- Practice technical interview quizzes and track performance over time
- View industry insights like salary ranges, trends, and in-demand skills
- Keep insights fresh automatically via a weekly Inngest cron job

---

## ✨ Core Features

- **🔐 Authentication** - Clerk auth + protected routes via middleware
- **🧭 Onboarding Profile** - Choose industry, experience, skills, and bio
- **📄 Resume Builder** - Markdown editor + live preview + PDF export
- **✍️ AI Resume Improvements** - Improve bullet/section text with Gemini prompts
- **📝 AI Cover Letters** - Generate, list, view, and delete cover letters
- **🎯 Interview Prep (Quizzes)** - AI-generated multiple choice questions
- **📈 Performance Analytics** - Scores, charts, and improvement tips
- **📊 Industry Insights** - Salary ranges, growth, demand level, trends, top skills
- **⏱️ Scheduled Updates** - Weekly cron refresh of industry insights via Inngest
- **🌙 Dark/Light Theme** - Theme toggle using `next-themes`

---

## 👥 Who Is This For?

Great for learning/building:
- **Full-stack Next.js**: App Router, server actions, RSC
- **Auth + protected routes**: Clerk + middleware
- **AI product patterns**: prompt-to-JSON, content generation, iterative improvements
- **Background jobs**: cron scheduling with Inngest
- **Prisma + Postgres**: schema-first development and relations
- **Charts + UX**: analytics views with Recharts

---

## 🛠 Tech Stack

### Frontend
<<<<<<< HEAD
- **Next.js 16** - App Router
- **React 19** - UI library
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible primitives
- **shadcn-style UI** - Component patterns (in `components/ui`)
- **React Hook Form + Zod** - Forms + validation
- **Recharts** - Charts
- **Lucide React** - Icons
- **@uiw/react-md-editor** - Markdown editor
=======
- **Next.js 16** - React framework with app directory
- **React 19** - UI library with latest features
- **Tailwind CSS 4** - Utility-first styling
- **ShadCN UI** - Accessible component primitives
- **React Hook Form** - Efficient form management
- **Zod** - Type-safe schema validation
- **Recharts** - Data visualization
- **Lucide React** - Icon library
>>>>>>> 0492cc0669d74c078e1454d0e71dc090aa6d2870

### Backend & Services
- **Clerk** - Authentication
- **Prisma** - ORM
- **PostgreSQL** - Database (`DATABASE_URL`)
- **Google Generative AI (Gemini 2.5 Flash)** - Content generation
- **Inngest** - Cron + background workflows

### Deployment
- **Vercel** - Hosting

---

## 📁 Project Structure

```text
sensai/
├── actions/                      # Server actions (DB + AI)
│   ├── cover-letter.js
│   ├── dashboard.js
│   ├── interview.js
│   ├── resume.js
│   └── user.js
├── app/
│   ├── api/
│   │   └── inngest/
│   │       └── route.js          # Inngest serve endpoint
│   ├── (auth)/                   # Clerk auth routes
│   └── (main)/                   # App features
│       ├── dashboard/
│       ├── onboarding/
│       ├── resume/
│       ├── ai-cover-letter/
│       └── interview/
├── components/                   # UI + shared components
│   └── ui/                       # shadcn-style primitives
├── lib/
│   ├── prisma.js                 # Prisma client singleton
│   └── inngest/                  # Inngest client + functions
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   ├── banner.jpeg
│   └── logo.png
├── middleware.js                 # Clerk route protection
├── next.config.mjs
└── package.json
```

---

## 🚀 Quick Start

### 1) Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)
- A PostgreSQL database
- A Clerk application
- A Google AI Studio API key (Gemini)

### 2) Install dependencies

```bash
npm install
```

### 3) Environment variables

Create a `.env.local` file:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# Gemini
GEMINI_API_KEY=your_gemini_api_key

# Inngest (required for signed requests + cron)
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Optional (not required by the current code, but often used by Inngest tooling)
INNGEST_EVENT_KEY=your_inngest_event_key
```

### 4) Prisma: generate + migrate

```bash
npx prisma generate
npx prisma migrate dev
```

### 5) Start the dev server

```bash
npm run dev
```

Open http://localhost:3000

---

## 🌐 API Routes

| Route | Methods | Purpose |
|------|---------|---------|
| `/api/inngest` | `GET`, `POST`, `PUT` | Inngest endpoint that serves background functions (including the weekly cron) |

---

## 💾 Database Schema (Prisma)

SensAI uses PostgreSQL via Prisma. Core models:

### `User`
- Clerk user mapping: `clerkUserId`
- Profile: `industry`, `experience`, `skills[]`, `bio`

### `Resume`
- One resume per user: `userId` (unique)
- `content` stored as markdown

### `CoverLetter`
- Stored per user with metadata: `companyName`, `jobTitle`, optional `jobDescription`

### `Assessment`
- Stores interview quiz results: `quizScore`, `questions` (JSON array), `improvementTip`

### `IndustryInsight`
- Per-industry data: salary ranges (JSON), demand level, trends, top skills, outlook

---

## 📊 How It Works (End-to-End)

1. **User signs in** with Clerk
2. **User completes onboarding** (industry, skills, experience, bio)
3. **Dashboard shows industry insights** (generated on-demand if missing)
4. **Resume builder** saves markdown to Postgres and supports AI improvements
5. **Cover letters** are generated from job inputs and stored for later
6. **Interview quiz** generates questions, saves results, and calculates a score
7. **Weekly cron** refreshes insights for all industries stored in the DB

---

## ⏱️ Cron / Scheduled Updates (Inngest)

Industry insights refresh runs on a weekly cron schedule:

- **Function:** `Generate Industry Insights`
- **Schedule:** Sundays at 00:00 (cron: `0 0 * * 0`)
- **Route:** `/api/inngest`

If you want to run Inngest locally, you can use the Inngest dev server and point it to your Next.js endpoint (example):

```bash
npx inngest-cli@latest dev -u http://localhost:3000/api/inngest
```

---

## 🐛 Troubleshooting

| Issue | Likely Cause | Fix |
|------|--------------|-----|
| Stuck on protected pages | Not signed in | Sign in via Clerk, then retry the route |
| Prisma errors / can’t connect | Bad `DATABASE_URL` | Verify the connection string and DB is reachable |
| AI generation fails | Missing/invalid `GEMINI_API_KEY` | Set key in `.env.local` and restart dev server |
| Inngest cron not running | Inngest not configured | Use Inngest Cloud + signing key, or run local dev server |
| Dashboard redirects to onboarding | Profile not onboarded | Complete onboarding once (sets `User.industry`) |

---

## 🚢 Building for Production

```bash
npm run build
npm run start
```

---

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🔐 Security Notes

⚠️ For production:
- Never expose `CLERK_SECRET_KEY` or `GEMINI_API_KEY` to the client
- Keep `INNGEST_SIGNING_KEY` secure
- Use a production-grade Postgres instance with SSL enabled

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a Pull Request.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Copyright © 2026 Manan**

---

## 👨‍💻 Author

Built by Manan.

---

## 🙏 Acknowledgments

- Clerk for authentication
- Google Generative AI (Gemini) for powering AI features
- Prisma for database tooling
- Inngest for cron workflows
- Vercel for hosting

---

**Ready to accelerate your career? Visit https://sensai-lyart.vercel.app/ and start building.**
