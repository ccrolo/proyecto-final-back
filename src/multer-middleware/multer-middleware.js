import multer from 'multer'

const storageEngine = multer.diskStorage({
    destination:function(req, file,cb){
       
        cb(null, './docus')
    },
    filename:function(req,file,cb){
       
        cb(null,file.fieldname + '.jpg')
    }
})

export const uploadMiddleware = multer({storage:storageEngine})