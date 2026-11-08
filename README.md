# 💪 FitLog

FitLog is a dark, no-nonsense gym companion. Browse a library of workouts, lock your favourites into today's plan, save others for later, and track minutes and calories as you go.

🔗 **Live Link:** ([your linek her](https://my-assignment6-one.vercel.app))
📦 **GitHub:** ([your repo link here](https://github.com/Gourab-Biswas-Antu/my-assignment6))

## 🛠️ Technologies Used

- Next.js (App Router) + TypeScript
- Tailwind CSS + DaisyUI
- React Context API
- React Toastify
- Lucide React (icons)

## ✨ Key Features

1. **Workout Library** – responsive 3-column card grid loaded from the FitLog API, with a loading spinner.
2. **Workout Details** – two-column layout with a key specs table and step-by-step instructions.
3. **Today's Plan & Saved** – add workouts to today's plan (max 5) or save them for later, with live navbar counters.
4. **My Plan Dashboard** – live Exercises / Minutes / Calories metrics, tabs, Mark as Done, and Remove.
5. **Sort Dropdown** – sort the list by Duration, Calories or Rating.
6. **Toast Notifications** – instant feedback for every action.
7. **Persistent Data** – plan and saved lists survive a page reload (localStorage).
8. **Fully Responsive** – works on mobile, tablet and desktop, with custom loading, error and 404 pages.

## 📁 Project Structure

```
src/
├── app/
│   ├── workouts/[id]/        # details page (+ its own loading.tsx)
│   ├── my-plan/              # My Plan page
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx              # home page
├── components/
│   ├── homepage/             # Banner, Workouts
│   ├── workoutDetails/       # AddToPlanButton, SaveForLaterButton
│   └── shared/               # Navbar, Footer, WorkoutCard, PlanCard, StatsRow, Loader
├── context/
│   └── WorkoutsContext.tsx
└── types/
    └── workouts.type.ts
```

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

The API base URL is read from `NEXT_PUBLIC_SERVER_BASE_URL` (see `.env.local`). If it is missing, the app falls back to `https://api.abcz.workers.dev`.

