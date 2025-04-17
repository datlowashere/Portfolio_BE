import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  type: 'technical' | 'soft' | 'tool';
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  description?: string;
  icon?: string;
}

const SkillSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['technical', 'soft', 'tool'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  proficiency: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model<ISkill>('Skill', SkillSchema); 