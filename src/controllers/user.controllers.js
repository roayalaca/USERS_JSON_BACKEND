import { getConnection } from "../database.js"
import jwt from "jsonwebtoken"
export const logIn =  (req, res) => {
    

    const db = getConnection()


    //Validar que el email exista y sea string
    const userFound = getConnection().data.users.find(
        (user) => user.email === req.body.email
    );
    if(!userFound) {
        return res.sendStatus(404).json({
            error: "Invalid email",
            message: "email doesnt exist"
        });
    }

    const  validPassword = getConnection().data.users.find(
        (user) => userFound.password === req.body.password
    );

    if(!validPassword) {
        return res.sendStatus(404).json({
            message: "you shall not pass"
        });
    }

    const {_id, guid, isActive, picture, age, eyeColor, name, company, email, phone, address } = userFound;

    const userInfo = { _id, guid, isActive, picture, age, eyeColor, name, company, email, phone, address  }

    const token = jwt.sign(userInfo, "Backend7510671#$", {
        algorithm: 'HS512',
        expiresIn: "7m"
    });

    userInfo.token = token;

   res.json(userInfo)

};


export const getDetail =  (req, res) => {
    const userFound = getConnection().data.users.find(
        (user) => user._id === req.params.id
    );
    
    if(!userFound) return res.sendStatus(404);
    const { _id, guid, isActive, picture, age, eyeColor, name, company, email, password, phone, address } = userFound;

   res.json({_id, guid, isActive, picture, age, eyeColor, name, company, email,password, phone, address})

};


export const updateInfo = async (req, res) => {
   const db = getConnection()
   const userFound = getConnection().data.users.find(
        (user) => user._id === req.params.id
    );

    if(!userFound) return res.sendStatus(404);

    userFound.age = req.body.age
    userFound.eyeColor = req.body.eyeColor
    userFound.name.first = req.body.name.first
    userFound.name.last = req.body.name.last
    userFound.company = req.body.company
    userFound.email = req.body.email
    userFound.password = req.body.password
    userFound.phone = req.body.phone
    userFound.address = req.body.address
   

    db.data.users.map(t => t.id === req.params.id ? userFound : t)

    await db.write();

    res.send(userFound);
};