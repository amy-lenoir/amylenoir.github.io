import { Router } from 'express';
import { About } from '../models/index.js';
import { authMiddleware, AuthRequest } from '../middleware/auth.js';

const router = Router();

// Get about info
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About({
        name: 'Amy Lenoir',
        title: 'Your Title',
        bio: 'Your bio here',
      });
      await about.save();
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about' });
  }
});

// Update about info (admin only)
router.put('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(req.body);
    } else {
      Object.assign(about, req.body);
      about.updatedAt = new Date();
    }
    await about.save();
    res.json(about);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update about' });
  }
});

export default router;
