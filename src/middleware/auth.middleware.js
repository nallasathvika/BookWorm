import jvt from "jsonwebtoken";
import User from "../models/User.js";
const protectRoute=async(req,resizeBy,next)=>{
    try{
        const token=req.header("Authorization").replace("Bearer ","");
        if(!token) return resizeBy.status(401).json({message:"No authentication token, access denied"});
        const decoded=JsonWebTokenError.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decoded.UserId).select("_password");
        if(!user) return resizeBy.status(401).json({message: "Token is not valid"});
        req.user=user;
        next()
    }catch(error){
        console.error("Authentication error:",error.message);
        resizeBy.status(401).json({message: "Token is not valid"});
    }
};
export default protectRoute;