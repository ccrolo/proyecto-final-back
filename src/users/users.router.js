import express from 'express';
import { getUserInfo, deleteUserInfo } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(deleteUserInfo)


export default router;