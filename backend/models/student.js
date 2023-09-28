module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        course_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        attendanceId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            },
        },
        admission_date: {
            type: DataTypes.DATEONLY,
            allowNull:false,
            validate: {
                notEmpty: true
            },
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
           
            },
        },
        classs: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            },
        },

        dob: {
            type: DataTypes.DATEONLY,
            // allowNull:false,
            validate: {
               // notEmpty: true,
            },
        },
        registno:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
        
       
},{
    freezeTableName:true,
    tableName:'student',
    underscored:true

})
student.associate = (models) => {
    student.belongsTo(models.course, { foreignKey: 'course_id' ,as:'student_course'});
    student.belongsTo(models.Class,{foreignKey:"classId"})
    student.belongsTo(models.attendance,{foreignKey:"attendanceId"})



  };
return student
}