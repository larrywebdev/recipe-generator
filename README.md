# AI Recipe Generator

AI Recipe Generator is a web application that creates personalized recipes based on user input. Users can provide available ingredients and refine results using criteria such as dietary preference, meal type, and available cooking time.

The application uses the Gemini API to dynamically generate structured, readable recipes in real time.

---

## Live Demo

Deployed on Vercel.

[Live Demo](https://recipe-generator-six-pied.vercel.app/)
![Recipe Generator Demo](https://res.cloudinary.com/dh4gfd8ey/video/upload/v1771963915/2026-02-24_20-46-11_m04cdy.gif)

---

## Features

- Generate recipes from custom ingredient input
- Filter by dietary preference (e.g., vegetarian, vegan, etc.)
- Adjust by available cooking time
- Select meal type (breakfast, lunch, dinner, etc.)
- Clean UI with modern component architecture
- Real-time AI-powered responses
- Markdown rendering for formatted recipe output

---

## Tech Stack

Frontend and Backend

- Next.js 16
- React 19

AI Integration

- Gemini API via @google/genai

State & Validation

- Zustand
- Zod
- @tanstack/react-form

UI & Styling

- Tailwind CSS 4
- Radix UI
- Framer Motion
- Lucide Icons

Deployment

- Vercel

---

## How It Works

1. The user submits ingredients and preferences through the frontend form.
2. A request is sent to a Next.js API route.
3. The backend calls the Gemini API using the configured API key.
4. The generated recipe is returned and rendered in a formatted Markdown layout.

There is no authentication layer. The application is designed as a streamlined portfolio project demonstrating AI integration and full-stack workflow.

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/larrywebdev/recipe-generator
cd recipe-generator

### 2. Install dependencies

npm install

### 3. Configure Environment Variables

Create a .env.local file in the root directory and add:

GEMINI_API_KEY=your_api_key_here

You can obtain an API key from Google AI Studio.

### 4. Run the development server

npm run dev

The application will run locally at http://localhost:3000

---

## Build for Production

To create a production build:

npm run build

To start the production server:

npm run start

---

## Environment Variables

Required:

GEMINI_API_KEY
Used to authenticate requests to the Gemini API.

---

## Future Improvements

- User accounts and personalization
- Rate limiting and request protection
- Streaming AI responses
- Nutrition breakdown analysis

---

## License

This project is for portfolio and educational purposes.