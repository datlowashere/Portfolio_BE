import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from '../models/Profile';
import Experience from '../models/Experience';
import Project from '../models/Project';
import Skill from '../models/Skill';
import Blog from '../models/Blog';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Profile.deleteMany({}),
      Experience.deleteMany({}),
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Blog.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Create Profile
    const profile = await Profile.create({
      name: "John Doe",
      title: "Full Stack Developer",
      bio: "Passionate developer with 5+ years of experience in web development",
      email: "john.doe@example.com",
      location: "New York, USA",
      resumeLink: "https://example.com/resume.pdf",
      socialLinks: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    });
    console.log('Profile created');

    // Create Experiences
    const experiences = await Experience.create([
      {
        title: "Senior Full Stack Developer",
        organization: "Tech Corp",
        type: "work",
        location: "New York, USA",
        startDate: "2021-01-01",
        endDate: null,
        current: true,
        description: "Leading development of enterprise web applications",
        achievements: [
          "Lead a team of 5 developers",
          "Implemented CI/CD pipeline",
          "Reduced loading time by 40%"
        ],
        technologies: ["React", "Node.js", "MongoDB", "AWS"]
      },
      {
        title: "Bachelor of Computer Science",
        organization: "University of Technology",
        type: "education",
        location: "San Francisco, CA",
        startDate: "2015-09-01",
        endDate: "2019-06-30",
        current: false,
        description: "Studied Computer Science with focus on Software Engineering",
        achievements: [
          "Dean's List all semesters",
          "Led student coding club",
          "Developed university event management system"
        ],
        technologies: ["Java", "Python", "Data Structures", "Algorithms"]
      }
    ]);
    console.log('Experiences created');

    // Create Projects
    const projects = await Project.create([
      {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with payment integration",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "Web Development",
        githubUrl: "https://github.com/johndoe/ecommerce",
        liveUrl: "https://ecommerce-example.com",
        imageUrl: "https://example.com/ecommerce.jpg",
        featured: true
      },
      {
        title: "Task Management App",
        description: "A real-time task management application",
        technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
        category: "Web Development",
        githubUrl: "https://github.com/johndoe/task-manager",
        liveUrl: "https://taskmanager-example.com",
        imageUrl: "https://example.com/taskmanager.jpg",
        featured: false
      }
    ]);
    console.log('Projects created');

    // Create Skills
    const skills = await Skill.create([
      {
        name: "JavaScript",
        type: "technical",
        category: "Programming Languages",
        proficiency: 90,
        yearsOfExperience: 5,
        description: "Modern JavaScript including ES6+ features"
      },
      {
        name: "React",
        type: "technical",
        category: "Frameworks",
        proficiency: 85,
        yearsOfExperience: 3,
        description: "React.js with hooks and context API"
      },
      {
        name: "Node.js",
        type: "technical",
        category: "Backend Technologies",
        proficiency: 80,
        yearsOfExperience: 4,
        description: "Server-side JavaScript with Express.js"
      },
      {
        name: "MongoDB",
        type: "tool",
        category: "Databases",
        proficiency: 75,
        yearsOfExperience: 3,
        description: "NoSQL database with Mongoose ODM"
      },
      {
        name: "Team Leadership",
        type: "soft",
        category: "Management",
        proficiency: 85,
        yearsOfExperience: 2,
        description: "Leading and mentoring development teams"
      }
    ]);
    console.log('Skills created');

    // Create Blogs
    const blogs = await Blog.create([
      {
        title: "Getting Started with React Hooks",
        content: "React Hooks are a powerful feature that allows you to use state and other React features in functional components...",
        author: "John Doe",
        tags: ["React", "JavaScript", "Web Development"],
        publishDate: new Date()
      },
      {
        title: "Building RESTful APIs with Node.js",
        content: "In this tutorial, we'll learn how to build scalable RESTful APIs using Node.js and Express...",
        author: "John Doe",
        tags: ["Node.js", "API", "Backend"],
        publishDate: new Date()
      }
    ]);
    console.log('Blogs created');

    console.log('All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData(); 