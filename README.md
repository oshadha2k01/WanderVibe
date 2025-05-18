# WanderVibe - Sri Lankan Travel Experience

WanderVibe is a full-stack web application built for a Sri Lankan travel agency, showcasing their services, destinations, and allowing customers to make inquiries.

## Live Demo

Experience WanderVibe without installation:

🌐 **[Visit WanderVibe Live Demo](https://wander-vibe-app.vercel.app/)**

This frontend-only demonstration showcases:
- Responsive travel website design
- Interactive UI elements
- Full navigation between pages
- Contact form with client-side validation and localStorage storage
- Visually appealing destination and service displays

*Note: The live demo is frontend-only. Form submissions are stored in your browser's localStorage rather than a database.*

## Technologies Used

- **Frontend**: React, TailwindCSS, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Vercel (Frontend), Render (Backend)

## Project Overview

WanderVibe is a comprehensive travel platform featuring:

- **Home Page**: Showcasing featured destinations and experiences in Sri Lanka
- **Services Page**: Displaying various tour packages and travel services
- **About Page**: Information about the travel agency and its values
- **Contact Page**: Form for inquiries with validation and data storage
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v8 or higher
- MongoDB Atlas account (for full-stack functionality)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/wandervibe.git
   cd wandervibe
   ```

2. Install dependencies
   ```
   npm run install-all
   ```

3. Set up environment variables
   - Copy the `.env.example` file in the backend folder to `.env`
   - Update the MongoDB connection string in `.env`

4. Start development servers
   ```
   npm run dev
   ```

## Deployment Options

### Frontend-Only Deployment (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy the project

### Full-Stack Deployment (Render.com)

This application is configured for deployment on Render.com:

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Use the following settings:
   - **Build Command**: `npm run postinstall`
   - **Start Command**: `npm start`
4. Add environment variables in Render dashboard:
   - `NODE_ENV`: `production`
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: `10000` (or any port Render assigns)
   - `FRONTEND_URL`: Your frontend URL (for CORS)

## Project Structure

- `/frontend` - React application built with Vite
- `/backend` - Express API server
- `/backend/models` - MongoDB data models
- `/backend/controllers` - API route controllers
- `/backend/routes` - API route definitions

## License

This project is licensed under the ISC License.
