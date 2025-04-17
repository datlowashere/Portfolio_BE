import express from 'express';
import {
  getProfile,
  updateProfile
} from '../controllers/profileController';

const router = express.Router();

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: User profile data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - title
 *                 - bio
 *                 - email
 *                 - location
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 title:
 *                   type: string
 *                   example: "Full Stack Developer"
 *                 bio:
 *                   type: string
 *                   example: "Passionate about web development"
 *                 email:
 *                   type: string
 *                   example: "john@example.com"
 *                 phone:
 *                   type: string
 *                   example: "+1234567890"
 *                 location:
 *                   type: string
 *                   example: "New York, USA"
 *                 image:
 *                   type: string
 *                   example: "https://example.com/profile.jpg"
 *                 resumeLink:
 *                   type: string
 *                   example: "https://example.com/resume.pdf"
 *                 socialLinks:
 *                   type: object
 *                   properties:
 *                     github:
 *                       type: string
 *                       example: "https://github.com/johndoe"
 *                     linkedin:
 *                       type: string
 *                       example: "https://linkedin.com/in/johndoe"
 *                     x:
 *                       type: string
 *                       example: "https://x.com/johndoe"
 *                     facebook:
 *                       type: string
 *                       example: "https://facebook.com/johndoe"
 *                     instagram:
 *                       type: string
 *                       example: "https://instagram.com/johndoe"
 *                     youtube:
 *                       type: string
 *                       example: "https://youtube.com/@johndoe"
 *                     telegram:
 *                       type: string
 *                       example: "https://t.me/johndoe"
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["JavaScript", "React", "Node.js"]
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.get('/', getProfile);

/**
 * @swagger
 * /api/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - title
 *               - bio
 *               - email
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               title:
 *                 type: string
 *                 example: "Full Stack Developer"
 *               bio:
 *                 type: string
 *                 example: "Passionate about web development"
 *               email:
 *                 type: string
 *                 example: "john@example.com"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               location:
 *                 type: string
 *                 example: "New York, USA"
 *               image:
 *                 type: string
 *                 example: "https://example.com/profile.jpg"
 *               resumeLink:
 *                 type: string
 *                 example: "https://example.com/resume.pdf"
 *               socialLinks:
 *                 type: object
 *                 properties:
 *                   github:
 *                     type: string
 *                     example: "https://github.com/johndoe"
 *                   linkedin:
 *                     type: string
 *                     example: "https://linkedin.com/in/johndoe"
 *                   x:
 *                     type: string
 *                     example: "https://x.com/johndoe"
 *                   facebook:
 *                     type: string
 *                     example: "https://facebook.com/johndoe"
 *                   instagram:
 *                     type: string
 *                     example: "https://instagram.com/johndoe"
 *                   youtube:
 *                     type: string
 *                     example: "https://youtube.com/@johndoe"
 *                   telegram:
 *                     type: string
 *                     example: "https://t.me/johndoe"
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "React", "Node.js"]
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/', updateProfile);

export default router; 