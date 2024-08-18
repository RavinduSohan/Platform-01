import mongoose from "mongoose";

const subjectSchema= new mongoose.schema({
    name:{
        type:String,
        required:true,
    },
});

module.exports= mongoose.model('subject', subjectSchema);
