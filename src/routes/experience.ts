import express from 'express';
import {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} from '../controllers/experienceController';

const router = express.Router();

/**
 * @swagger
 * /api/experience:
 *   get:
 *     summary: Get all experiences
 *     tags: [Experience]
 *     responses:
 *       200:
 *         description: List of all experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 *       500:
 *         description: Server error
 */
router.get('/', getExperiences);

/**
 * @swagger
 * /api/experience/{id}:
 *   get:
 *     summary: Get an experience by ID
 *     tags: [Experience]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     responses:
 *       200:
 *         description: Experience details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       404:
 *         description: Experience not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getExperienceById);

/**
 * @swagger
 * /api/experience:
 *   post:
 *     summary: Create a new experience
 *     tags: [Experience]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       201:
 *         description: Experience created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
router.post('/', createExperience);

/**
 * @swagger
 * /api/experience/{id}:
 *   put:
 *     summary: Update an experience
 *     tags: [Experience]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       200:
 *         description: Experience updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Experience not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateExperience);

/**
 * @swagger
 * /api/experience/{id}:
 *   delete:
 *     summary: Delete an experience
 *     tags: [Experience]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     responses:
 *       200:
 *         description: Experience deleted successfully
 *       404:
 *         description: Experience not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteExperience);

/**
 * @swagger
 * components:
 *   schemas:
 *     Experience:
 *       type: object
 *       required:
 *         - type
 *         - category
 *         - title
 *         - organization
 *         - location
 *         - startDate
 *         - description
 *       properties:
 *         type:
 *           type: string
 *           enum: [work, education]
 *           description: Type of experience
 *         category:
 *           type: string
 *           description: Category of the experience (e.g., Frontend, Backend, Mobile)
 *         title:
 *           type: string
 *           description: Job title or degree name
 *         organization:
 *           type: string
 *           description: Company or institution name
 *         location:
 *           type: string
 *           description: Location of the experience
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the experience
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the experience (optional if current is true)
 *         current:
 *           type: boolean
 *           default: false
 *           description: Whether this is a current position
 *         description:
 *           type: string
 *           description: Detailed description of the experience
 *         achievements:
 *           type: array
 *           items:
 *             type: string
 *           description: List of achievements or responsibilities
 *         technologies:
 *           type: array
 *           items:
 *             type: string
 *           description: List of technologies used
 *         certificationUrl:
 *           type: string
 *           description: URL to certification (for education type)
 *         image:
 *           type: string
 *           description: URL to the company/institution logo or relevant image
 *       example:
 *         type: work
 *         category: Frontend Development
 *         title: Senior Software Engineer
 *         organization: Tech Company
 *         location: San Francisco, CA
 *         startDate: 2020-01-01
 *         endDate: 2023-12-31
 *         current: false
 *         description: Led frontend development team
 *         achievements: ["Improved performance by 50%", "Led team of 5 developers"]
 *         technologies: ["React", "TypeScript", "Node.js"]
 *         image: "https://example.com/company-logo.png"
 */

export default router; 