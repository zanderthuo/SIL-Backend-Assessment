import express from 'express';
import authRoutes from './auth.routes.js';
import albumRoutes from './album.routes.js';
import userRoutes from './user.routes.js';
import photoRoutes from './photo.routes.js';


const router = express.Router();

// Guest Routes
router.get('/', (req, res) => {
    return res.status(200).json('My api/v1');
});

// Authentication Routes
router.use('/auth', authRoutes)

// album Routes
router.use('/album', albumRoutes)

// User Routes
router.use('/user', userRoutes)


// photo Routes
router.use('/photo', photoRoutes)

export default router;