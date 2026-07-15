# Aforro Dashboard

A React + Vite dashboard app with a sidebar layout, analytics cards, charts, and a users table powered by the JSONPlaceholder API.

## Project Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to view the app.

## Features Implemented

- Responsive dashboard layout with sidebar and main content area
- Reusable UI sections for stats, charts, and tables
- Functional routing between dashboard pages
- User data table fetched from JSONPlaceholder API
- Search by name or email
- Sorting by name in ascending and descending order
- Filtering by city
- Loading and error states for API requests

## Assumptions and Decisions

- The dashboard UI follows the existing project structure and visual style rather than a pixel-perfect Figma replica.
- The public API used is https://jsonplaceholder.typicode.com/users.
- Axios is used for API requests to keep the data fetching logic simple and readable.
- The table currently displays the required columns: Name, Email, Company Name, and City.

# Deployed Link
- https://aforro-assignment-ciulabghh-ayuushvermas-projects.vercel.app/
