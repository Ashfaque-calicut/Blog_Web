import mongoose from "mongoose"



const Connection=async(PASSWORD)=>{
    const URL=`mongodb+srv://ashfaquepalazhi:${PASSWORD}@cluster0.nmn7fef.mongodb.net/`;
    try{
      await mongoose.connect(URL,{ useNewUrlParser:true});
      console.log("Database Connected Successfully");
    }catch(error){
    console.log("Error While Connecting with the database",error);
    }
}

export default Connection;