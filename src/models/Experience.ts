import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
  type: 'work' | 'education';
  category: string;
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  achievements?: string[];
  technologies?: string[];
  certificationUrl?: string;
  image?: string;
}

const ExperienceSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ['work', 'education'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  achievements: [{
    type: String,
  }],
  technologies: [{
    type: String,
  }],
  certificationUrl: {
    type: String,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IExperience>('Experience', ExperienceSchema); 