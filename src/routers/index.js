import { Router } from 'express';
import authRouter from './authRouter.js';
import financialRouter from './financialRouter.js';

const router = Router();

router.use(authRouter);
router.use('/financial-events', financialRouter);

export default router;
