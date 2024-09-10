import {
    Router
} from 'express';
const router = Router();
import {
    storeAllUsers
} from '../controllers/userController.js';

router.get('/test', storeAllUsers);

export default router;