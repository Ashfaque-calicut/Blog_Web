import User from "../model/user.js";

export const signupUser=async(request,response)=>{
 try {
    const user=request.body;
    const newUser=new User(user);
    await newUser.save();
    return response.status(200).json({msg:'signup successfull'})
 } catch (error) {
    return response.status(500).json({msg:'Error While signup the user'})
 }
}