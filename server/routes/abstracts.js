import express from 'express';

import { getAbstracts, createAbstract } from '../controllers/abstracts.js';

const router = express.Router();

router.get('/', getAbstracts);
router.post('/', createAbstract);

export default router;