const express = require('express')
const { getCourses, addCourse, getCoursesById, updateCourseById, deleteCourseById }
    = require('../controllers/coursesController')
const router = express.Router()


router.get('/', getCourses)
router.post('/', addCourse)
router.get('/:course_id', getCoursesById)
router.patch('/:course_id', updateCourseById)
router.delete('/:course_id', deleteCourseById)

module.exports = router