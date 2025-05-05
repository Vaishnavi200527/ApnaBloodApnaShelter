import { Router } from 'express';
import { register, login, verifyAadhaar, verifyOTP } from '../controllers/auth.controller';

const router = Router();

// Authentication routes
router.post('/register', register);
router.post('/login', login);
router.post('/verify-aadhaar', verifyAadhaar);
router.post('/verify-otp', verifyOTP);

export default router; 