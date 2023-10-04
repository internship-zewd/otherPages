module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        id_tag:{
            type: DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true
            },
        },
        full_identification:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true,
            },
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },

        fee: {
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
        

       
},{
    freezeTableName:true,
    tableName:'course',
    underscored:true

})
course.associate = (models) => {
    course.hasMany(models.student, { foreignKey: 'course_id' });
    course.hasMany(models.classs,{foreignKey:"course_id"})
  };
return course
}