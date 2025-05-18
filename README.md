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

*Note: This is a frontend-only demo. Form submissions are stored in your browser's localStorage.*

## Technologies Used

- **Frontend**: React, Tailwind CSS, Vite

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v8 or higher
- MongoDB Atlas account

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

## Deployment on Render.com

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

## Project Structure

- `/frontend` - React application built with Vite
- `/backend` - Express API server
- `/backend/models` - MongoDB data models
- `/backend/controllers` - API route controllers
- `/backend/routes` - API route definitions

## License

This project is licensed under the ISC License.
