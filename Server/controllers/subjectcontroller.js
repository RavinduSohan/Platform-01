import subject from '../models/subjects.js';

export const getSubjects= async (req,res) =>{
    try{
        const subjects= await subject.find();
        res.json(subjects);
    }catch(error){
        res.status(500).json({ message: 'server error'});
    }
};