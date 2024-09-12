import {
    Router
} from 'express';
const router = Router();
import {
    storeAllUsers,
    registerUser
} from '../controllers/userController.js';
import {
    createPayment
} from '../controllers/paymentController.js';

router.get('/test', storeAllUsers);
router.post('/register', registerUser);
router.post('/create/payment', createPayment);

export default router;