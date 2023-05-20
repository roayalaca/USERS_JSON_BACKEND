import jwt from "jsonwebtoken"

const authenticate = (req, res, next) => {
    try {

        const token = req.headers["token"];

        if(!token){
            return res.status(401).json({
                error: "not token provided",
            });
        }

        const decoded = jwt.verify(token, "Backend7510671#$",{
            algorithms: "HS512",
        });

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json(error);   
    }
}

export default authenticate;