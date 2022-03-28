import express from "express";
import uploadMiddleware from "./../multer-middleware/multer-middleware.js"
import { validateAuth } from "../auth/auth.middleware.js";
import { updateFileCtrl } from "./documents.controller.js";

const DocumentsRouter = express.Router();

router.route('/')
    .post(uploadMiddleware.single('file'),validateAuth, updateFileCtrl)


export default DocumentsRouter;