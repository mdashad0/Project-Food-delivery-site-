import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mdashad0:mdashad7667065411@cluster0.folkchg.mongodb.net/food-del');
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1);
    }
}