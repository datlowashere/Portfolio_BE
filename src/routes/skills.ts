import express from 'express';
import {
  getSkills,
  getSkillCategories,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
} from '../controllers/skillsController';

const router = express.Router();

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Get all skills with optional filters
 *     tags: [Skills]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [technical, soft, tool]
 *         description: Filter skills by type
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter skills by category
 *     responses:
 *       200:
 *         description: List of skills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Invalid skill type
 *       500:
 *         description: Server error
 */
router.get('/', getSkills);

/**
 * @swagger
 * /api/skills/categories:
 *   get:
 *     summary: Get all skill categories
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: List of skill categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Server error
 */
router.get('/categories', getSkillCategories);

/**
 * @swagger
 * /api/skills/{id}:
 *   get:
 *     summary: Get a skill by ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     responses:
 *       200:
 *         description: Skill details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getSkillById);

/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Create a new skill
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       201:
 *         description: Skill created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
router.post('/', createSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Update a skill
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       200:
 *         description: Skill updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Delete a skill
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     responses:
 *       200:
 *         description: Skill deleted successfully
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteSkill);

/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       required:
 *         - name
 *         - type
 *         - category
 *         - proficiency
 *         - yearsOfExperience
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the skill
 *         type:
 *           type: string
 *           enum: [technical, soft, tool]
 *           description: Type of the skill
 *         category:
 *           type: string
 *           description: Category of the skill
 *         proficiency:
 *           type: number
 *           minimum: 1
 *           maximum: 100
 *           description: Skill proficiency level (1-100)
 *         yearsOfExperience:
 *           type: number
 *           description: Years of experience with the skill
 *         description:
 *           type: string
 *           description: Optional description of the skill
 *         icon:
 *           type: string
 *           description: Optional icon URL for the skill
 *       example:
 *         name: JavaScript
 *         type: technical
 *         category: Programming Languages
 *         proficiency: 90
 *         yearsOfExperience: 5
 *         description: Modern JavaScript including ES6+ features
 *         icon: https://example.com/js-icon.png
 */

export default router; 