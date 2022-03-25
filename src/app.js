import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import TripRouter from './trips/trips.router.js'
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = 4000;

console.log(process.env.REACT_APP_EMAIL)
console.log(process.env.REACT_APP_PASS)

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);
app.use('/travels', TripRouter);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));