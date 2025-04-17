import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne();
    if (profile) {
      const updatedProfile = await Profile.findByIdAndUpdate(
        profile._id,
        req.body,
        { new: true }
      );
      res.json(updatedProfile);
    } else {
      const newProfile = new Profile(req.body);
      await newProfile.save();
      res.status(201).json(newProfile);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
}; 