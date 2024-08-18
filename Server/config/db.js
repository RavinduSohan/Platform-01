import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
    }catch(error){
        console.error('Connection error:', error);
        process.exit(1);
    }
};
module.exports= connectDB;


