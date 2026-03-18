import mongoose from 'mongoose';

export const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
  link: String,
  tags: [String],
  category: String,
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String,
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced', 'expert'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: String,
  startDate: Date,
  endDate: Date,
  current: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  avatar: String,
  resume: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Project = mongoose.model('Project', projectSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Experience = mongoose.model('Experience', experienceSchema);
export const About = mongoose.model('About', aboutSchema);
