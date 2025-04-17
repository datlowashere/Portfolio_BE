import mongoose, { Document, Schema } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  image?: string;
  phone?: string;
  resumeLink?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    x?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    telegram?: string;
  };
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

const profileSchema = new Schema<IProfile>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  resumeLink: {
    type: String,
    trim: true,
  },
  socialLinks: {
    github: String,
    linkedin: String,
    x: String,
    facebook: String,
    instagram: String,
    youtube: String,
    telegram: String,
  },
  skills: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

export default mongoose.model<IProfile>('Profile', profileSchema); 