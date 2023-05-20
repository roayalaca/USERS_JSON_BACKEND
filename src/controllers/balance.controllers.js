import { getConnection } from "../database.js"
import jwt from "jsonwebtoken"


export const getBalance = (req, res) => {
    const userFound = getConnection().data.users.find(
        (user) => user._id === req.params.id
    );
    
    if(!userFound) return res.sendStatus(404);
    res.json(userFound.balance);
}

