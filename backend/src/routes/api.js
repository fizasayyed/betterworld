import {
    Router
} from 'express';
const router = Router();
import {
    storeAllUsers,
    testAPI
} from '../controllers/userController.js';
import {
    createPayment
} from '../controllers/paymentController.js';

router.get('/test', testAPI);
router.post('/register', storeAllUsers);
router.post('/create/payment', createPayment);

export default router;