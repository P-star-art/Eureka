import express from 'express';

import { getAbstracts, createAbstract, deleteAbstract } from '../controllers/abstracts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAbstracts);
router.post('/', auth, createAbstract);
router.delete('/:id', auth, deleteAbstract);

export default router;