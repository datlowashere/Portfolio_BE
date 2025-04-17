import express from 'express';
import profileRoutes from './profile';
import experienceRoutes from './experience';
import projectRoutes from './project';
import skillRoutes from './skills';
import blogRoutes from './blog';
import contactRoutes from './contact';

const router = express.Router();

router.use('/profile', profileRoutes);
router.use('/experience', experienceRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/blog', blogRoutes);
router.use('/contact', contactRoutes);

export default router; 