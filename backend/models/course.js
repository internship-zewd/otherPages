module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      idTag: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },

        course_fee: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            
            validate: {
                notEmpty: true,
                
            },
        },
        course_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        
         fullIdentification: {
        type: DataTypes.STRING
      }
    

       
},{
    freezeTableName:true,
    tableName:'course',
    underscored:true

})
course.associate = (models) => {
    course.hasMany(models.student, { foreignKey: 'course_id' });
    course.hasMany(models.classes, { foreignKey: 'course_id' });
    course.hasMany(models.Class,{foreignKey:"courseId"})
  };
return course
}