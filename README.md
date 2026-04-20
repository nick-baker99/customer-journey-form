# Customer Journey Form

A multi-step registration form built for a concept movie fanatics platform where users can log and review movies they watch.

## What I Built

The app contains a three-step registration process: personal information, account setup, and content preferences.

The form data is validated on each step before the user can continue. Once the user has completed the form the data is sent to the backend API where the data is validated again. If validation is successful, the user is redirected to a success page.

## Bonus Task

Integrated the TMDB API to fetch a list of popular movies. The results are displayed on the preferences step as selectable options. User selects any movies they like and this would allow the app customise their viewing preferences algorithm.

## Tech Stack

- **Next.js 16** - App Router, API Routes
- **React 19** with `useState` and `useEffect` for state and data fetching
- **react-hook-form** - form state management
- **Zod** - used to validate data on the front end and back end.
- **DaisyUI** - component styling
- **Tailwind CSS 4**
- **TypeScript**
- **country-list** - country dropdown options
- **TMDB API** - popular movies for the preferences step

## Setup

```bash
npm install
npm run dev
```
