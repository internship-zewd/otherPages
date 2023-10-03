module.exports = (sequelize, DataTypes) => {
  const classs = sequelize.define( "classs",
    {
      instructor_id:{
          type:DataTypes.INTEGER,
          allowNull:false,

      },
      course_id:{
          type:DataTypes.INTEGER,
          allowNull:false,

      },
      
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      full_identification: {
        type: DataTypes.STRING,
      },
      
    },
    {
      freezeTableName: true,
      tableName:"classs",
      timestamps: false,
    }
    )

  classs.associate = (models) => {

    classs.hasMany(models.student, { foreignKey: "class_id" });
    classs.belongsTo(models.instructor, { foreignKey: "instructor_id" });
    classs.belongsTo(models.course, { foreignKey: "course_id" });
    classs.hasMany(models.attendance,{foreignKey:"class_id"})
  }


  

  return classs;
}
