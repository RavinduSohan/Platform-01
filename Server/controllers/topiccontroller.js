import Topic from '../models/topics.js';

export const getTopics= async(req,res) =>{
    try{
        const topics= await Topic.find({subject: req.params.subjectId});
        res.json(topics);
    }catch(error){
        res.status(500).json({message:'server error'});
    }
};