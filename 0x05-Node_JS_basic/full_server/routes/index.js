import express from 'express';
import AppContoller from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

router.get('/', AppContoller.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;