import { Router } from 'express';
import {
  newEvent,
  getEvent,
  getBalance,
} from '../controllers/financialController.js';
import verifyToken from '../middlewares/tokenChecker.js';

const financialRouter = Router();

financialRouter.post('/', verifyToken, newEvent);
financialRouter.get('/', verifyToken, getEvent);
financialRouter.get('/sum', verifyToken, getBalance);

export default financialRouter;
