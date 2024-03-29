import { retrieveUserInfoByEmail, deleteUserInfoByEmail, patchUserEmail } from './users.model.js';

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const deleteUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await deleteUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const updateEmailCtrl = async(req,res) => {
    const {id} = req.params
    const userNew = {
        username:req.body.username,
    }
    const updateduserName = await patchUserEmail(id,userNew)   
    res.json(updateduserName)
}

export const updateFileCtrl = (req,res) => {
    console.log(req.file)
    res.send('Enviado')
}

