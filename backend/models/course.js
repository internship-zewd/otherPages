module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },

        tuition_fee: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        

       
},{
    freezeTableName:true,
    tableName:'course',
    underscored:true

})
course.associate = (models) => {
    course.hasMany(models.student, { foreignKey: 'course_id' });
    course.hasMany(models.Class,{foreignKey:"courseId"})
  };
return course
}