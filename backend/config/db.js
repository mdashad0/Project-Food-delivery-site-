import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mdashad0:mdashad7667065411@cluster0.folkchg.mongodb.net/food-del').then(()=>console.log("DB connected"));
}