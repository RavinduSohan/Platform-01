import mongoose from 'mongoose';

const questionSchema= new mongoose.schema({
    text:{
        type:String,
        required : true,
    },
    topic:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Topic',
        required: true,
    },

});

module.exports= mongoose.model('Question',questionSchema);