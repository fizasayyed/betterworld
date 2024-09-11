import {
    Router
} from 'express';
const router = Router();
import {
    storeAllUsers,
    registerUser
} from '../controllers/userController.js';

router.get('/test', storeAllUsers);
router.post('/register', registerUser);

export default router;