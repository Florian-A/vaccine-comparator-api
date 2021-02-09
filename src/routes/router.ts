import { Router } from 'express';
import { login } from '../controller/authController';
// import { authenticated } from '../middleWare/userMW';
// import eventsRouter from './eventRoutes';
// import loginRouter from './loginRoute';
// import usersRouter from './userRoutes';
const router = Router();

router.use('/login', login)
// router.use('/user', authenticated, usersRouter)
// router.use('/event', eventsRouter)

export default router;