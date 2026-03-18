import { Router } from 'express';
import { Experience } from '../models/index.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';

const router = Router();

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
});

// Create experience (admin only)
router.post('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create experience' });
  }
});

// Update experience (admin only)
router.put('/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) {
      res.status(404).json({ error: 'Experience not found' });
      return;
    }
    res.json(experience);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update experience' });
  }
});

// Delete experience (admin only)
router.delete('/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      res.status(404).json({ error: 'Experience not found' });
      return;
    }
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
});

export default router;
