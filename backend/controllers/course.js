const { course } = require("../models");

const getAllCourse = (req, res) => {
  course
    .findAll()
    .then((courses) => {
      res.send(courses);

      console.log(courses);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const getOneCourse = (req, res) => {
  const course_id = req.params.id;
  course
    .findOne({ where: { id: course_id } })
    .then((course) => {
      res.send(course);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const createCourse = (req, res) => {
  const { courseName, fee, duration } = req.body;
  course
    .create({
      name: courseName,
      tuition_fee: fee,
      duration: duration,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  res.send("insert");
};

const updateCourse = (req, res) => {
  const { course, fee, duration } = req.body;
  course
    .update(
      {
        course_name: course,
        course_fee: fee,
        course_duration: duration,
      },

      { where: { id: req.params.id } }
    )
    .then((course) => {
      console.log(course);
      console.log(req.params.id);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const deleteCourse = (req, res) => {
  const course_id = req.params.id;
  course
    .destroy({ where: { id: course_id } })
    .then(res.send())
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

const countCourse = async (req, res) => {
  try {
    const count = await course.count();
    res.json(count)

  } catch (error) {
    console.log(error);
  }
  
};



module.exports = {
  getAllCourse,
  getOneCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  countCourse,
};
