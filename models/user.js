import mongoose from "mongoose"
const {Schema,model}=mongoose

const UserSchema=new Schema({
    name:{type:String},
    email:{type:String,required:true},
    username:{type:String,required:true},
    profilepic:{type:String},
    coverpic:{type:String},
    createdAt:{type:Date,Default:Date.now},
    updatedAt:{type:Date,Default:Date.now},
});

export default mongoose.model.User||model("ujjwal",UserSchema);