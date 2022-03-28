import express from 'express';
import { getUserInfo, deleteUserInfo, updateEmailCtrl, updateFileCtrl } from './users.controller.js';
import { uploadMiddleware } from '../multer-middleware/multer-middleware.js';
import { validateAuth } from '../auth/auth.middleware.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(deleteUserInfo)


router.route('/:id')
    .patch(updateEmailCtrl)

router.route('/upload')
    .post(uploadMiddleware.single("file"), validateAuth, updateFileCtrl)


export default router;