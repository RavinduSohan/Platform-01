import express from 'express';
import { getTopics } from '../controllers/topiccontroller.js';

const router= express.Router();

router.get('/:subjectId',getTopics);

module.exports = router;
