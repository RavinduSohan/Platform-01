import mongoose from "mongoose";

const topicSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subject',
        required:true,
    },
});

module.exports = mongoose.model('Topic',topicSchema);
