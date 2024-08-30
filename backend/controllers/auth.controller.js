import User from "../Models/User.model.js";

export const signup = async(req, res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    
        if(password != confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }
        
        const user = await User.findOne({username});

        if(user){
            return res.status(400.)
        }
    }catch(error){

    }
}

export const login = (req, res)=>{
    res.send('Login Route');
}

export const logout = (req, res)=>{
    res.send('Logout Route');
}