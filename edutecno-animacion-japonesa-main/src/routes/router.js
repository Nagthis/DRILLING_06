import { Router } from 'express';
import animesRoutes from './animesRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World 🌍');
});
router.use('/api/v1/animes', animesRoutes);

export default router;



