import express from 'express';
import { getQuestions } from '../controllers/questioncontroller.js';

const router = express.Router();

router.get('/:topicId',getQuestions);

module.exports= router;

