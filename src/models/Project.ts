import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Android App' | 'iOS App' | 'Cross-platform App' | 'Web development' | 'UX/UI';
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  technologies: {
    type: [String],
    required: [true, 'Technologies are required'],
  },
  image: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    trim: true,
  },
  liveUrl: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Android App', 'iOS App', 'Cross-platform App', 'Web development', 'UX/UI'],
  },
}, {
  timestamps: true,
});

export default mongoose.model<IProject>('Project', projectSchema); 