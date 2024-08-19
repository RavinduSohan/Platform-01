import Question from '../models/questions.js';

export const getQuestions= async(req,res) =>{
    try{
        const questions= await Question.find({topic:req.params.topicId});
        res.json(questions);
    }catch(error){
        res.status(500).json({message:'server error'});
    }
};