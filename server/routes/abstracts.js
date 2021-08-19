import express from 'express';

import { getAbstracts, createAbstract, deleteAbstract } from '../controllers/abstracts.js';

const router = express.Router();

router.get('/', getAbstracts);
router.post('/', createAbstract);
router.delete('/:id', deleteAbstract);

export default router;