import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import TripRouter from './trips/trips.router.js'
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

console.log(process.env.REACT_APP_EMAIL)
console.log(process.env.REACT_APP_PASS)
console.log(process.env.CB)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);
app.use('/travels',validateAuth, TripRouter);
app.use('/docus', express.static('docus'))

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));