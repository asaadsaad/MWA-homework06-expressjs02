let courses = [{ id: 1, title: 'Modern Web Application', students: [{ id: 1, name: "Asaad Saad", grade: 95, picture: "1570286884.jpg" }] }]

module.exports.getCourses = (req, res, next) => {
    res.send(courses)
}

module.exports.addCourse = (req, res, next) => {
    const course = req.body;
    res.json({ 'course': course })
}

module.exports.getCoursesById = (req, res, next) => {
    const { course_id } = req.params;
    const { sort } = req.query;
    res.json({ 'course': course_id, sorting: sort })
}

module.exports.updateCourseById = (req, res, next) => {
    const { course_id } = req.params;
    const new_course = req.body;
    res.json({ 'courses': course_id, new_course })
}

module.exports.deleteCourseById = (req, res, next) => {
    const { course_id } = req.params;
    res.json({ 'courses': course_id })
}