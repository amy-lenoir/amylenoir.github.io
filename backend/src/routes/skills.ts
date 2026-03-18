import { Router } from 'express';
import { Skill } from '../models/index.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';

const router = Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Create skill (admin only)
router.post('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create skill' });
  }
});

// Update skill (admin only)
router.put('/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) {
      res.status(404).json({ error: 'Skill not found' });
      return;
    }
    res.json(skill);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update skill' });
  }
});

// Delete skill (admin only)
router.delete('/:id', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      res.status(404).json({ error: 'Skill not found' });
      return;
    }
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

export default router;
