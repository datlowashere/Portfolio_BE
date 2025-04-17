# Portfolio Backend

This is the backend API server for the personal portfolio website built with Node.js, Express, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Nodemailer for email handling
- Swagger for API documentation

## Features

- RESTful API endpoints
- MongoDB database integration
- Email service for contact form
- API documentation with Swagger
- TypeScript for type safety
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update the environment variables in `.env`:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   NODE_ENV=development
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The server will be available at `http://localhost:5000`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## API Endpoints

### Profile
- GET `/api/profile` - Get user profile
- PUT `/api/profile` - Update user profile

### Experience
- GET `/api/experience` - Get all experiences
- GET `/api/experience/:id` - Get experience by ID
- POST `/api/experience` - Create new experience
- PUT `/api/experience/:id` - Update experience
- DELETE `/api/experience/:id` - Delete experience

### Projects
- GET `/api/projects` - Get all projects
- GET `/api/projects/:id` - Get project by ID
- POST `/api/projects` - Create new project
- PUT `/api/projects/:id` - Update project
- DELETE `/api/projects/:id` - Delete project

### Skills
- GET `/api/skills` - Get all skills
- POST `/api/skills` - Create new skill
- PUT `/api/skills/:id` - Update skill
- DELETE `/api/skills/:id` - Delete skill

### Contact
- POST `/api/contact` - Send contact message

## Project Structure

```
backend/
├── src/
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── scripts/      # Utility scripts
│   ├── types/        # TypeScript types
│   └── app.ts        # Express application
├── .env.example      # Example environment variables
└── tsconfig.json     # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed the database with initial data
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port | Yes |
| MONGODB_URI | MongoDB connection string | Yes |
| EMAIL_USER | Gmail address for sending emails | Yes |
| EMAIL_PASS | Gmail app password | Yes |
| NODE_ENV | Environment (development/production) | Yes |

## Database Seeding

To seed the database with initial data:

```bash
npm run seed
# or
yarn seed
```

## API Documentation

API documentation is available at `/api-docs` when the server is running.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License. 