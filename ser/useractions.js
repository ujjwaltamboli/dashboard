"use server"
import connectDB from "@/db/connectdb";
import User from "@/models/user";
export const takedata=async(e)=>{
    await connectDB();
    let data=await Object.fromEntries(e);
    await User.create({
        name:data.name,
        email:data.email,
        username:data.username,
        profilepic:data.profilepic,
        coverpic:data.coverpic,
    })
}