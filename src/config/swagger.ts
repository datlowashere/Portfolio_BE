import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const port = process.env.PORT || 5000;
const baseUrl = process.env.BASE_URL || 'http://localhost';
const url = `${baseUrl}:${port}`;

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API Documentation',
      version: '1.0.0',
      description: 'API documentation for the portfolio website backend',
    },
    servers: [
      {
        url,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

export const specs = swaggerJsdoc(options); 