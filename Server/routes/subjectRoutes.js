import express from 'express';
import { getsubjects } from '../controllers/subjectcontroller.js';

const router= express.Router();

router.get('/',getsubjects);

module.exports= router;