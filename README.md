markdown# Authentication App

A modern, responsive login and registration page built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Login and Registration forms
- ✅ Form validation
- ✅ Password visibility toggle
- ✅ Responsive design
- ✅ Modern UI with gradient backgrounds
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Installation

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
   cp .env.example .env
```

4. Start the development server:
```bash
   npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Build for Production
```bash
npm run build
```

## Project Structure
src/
├── components/       # React components
├── types/           # TypeScript type definitions
├── services/        # API services
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── App.tsx          # Main app component
└── main.tsx         # Entry point

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## License

MIT

Setup Instructions

Create a new directory for your project
Copy all the files above into their respective locations
Run npm install to install dependencies
Run npm run dev to start the development server
Open http://localhost:3000 in your browser

Note: The API endpoints in authService.ts are placeholders. You'll need to replace them with your actual backend API URLs.