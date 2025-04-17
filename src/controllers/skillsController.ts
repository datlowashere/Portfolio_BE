import { Request, Response } from 'express';
import Skill from '../models/Skill';

export const getSkills = async (req: Request, res: Response) => {
  try {
    const { type, category } = req.query;
    let query: any = {};

    if (type) {
      if (!['technical', 'soft', 'tool'].includes(type as string)) {
        return res.status(400).json({ message: 'Invalid skill type. Must be one of: technical, soft, tool' });
      }
      query.type = type;
    }
    if (category) {
      query.category = category;
    }

    const skills = await Skill.find(query).sort({ proficiency: -1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills' });
  }
};

export const getSkillCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Skill.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skill categories' });
  }
};

export const getSkillById = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skill' });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name, type, category, proficiency, yearsOfExperience, description, icon } = req.body;

    // Validate required fields
    if (!name || !type || !category || !proficiency || !yearsOfExperience) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate type enum
    if (!['technical', 'soft', 'tool'].includes(type)) {
      return res.status(400).json({ message: 'Invalid skill type. Must be one of: technical, soft, tool' });
    }

    // Validate proficiency range
    if (proficiency < 1 || proficiency > 100) {
      return res.status(400).json({ message: 'Proficiency must be between 1 and 100' });
    }

    const skill = new Skill({
      name,
      type,
      category,
      proficiency,
      yearsOfExperience,
      description,
      icon
    });

    await skill.save();
    res.status(201).json(skill);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error creating skill' });
  }
};

export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { name, type, category, proficiency, yearsOfExperience, description, icon } = req.body;

    // Validate type enum if provided
    if (type && !['technical', 'soft', 'tool'].includes(type)) {
      return res.status(400).json({ message: 'Invalid skill type. Must be one of: technical, soft, tool' });
    }

    // Validate proficiency range if provided
    if (proficiency && (proficiency < 1 || proficiency > 100)) {
      return res.status(400).json({ message: 'Proficiency must be between 1 and 100' });
    }

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { name, type, category, proficiency, yearsOfExperience, description, icon },
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error updating skill' });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skill' });
  }
}; 