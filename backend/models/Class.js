module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define( "Class",
      {
        instructorId:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        courseId:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idTag: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        fullIdentification: {
          type: DataTypes.STRING,
        },
        instructorId: {
          type: DataTypes.INTEGER
        },
        courseId: {
          type: DataTypes.INTEGER
        },
      },
      {
        freezeTableName: true,
        tableName:"Class",
        timestamps: false,
      }
      )
  
    Class.associate = (models) => {

      Class.hasMany(models.student, { foreignKey: "classId" });
      Class.belongsTo(models.instructor, { foreignKey: "instructorId" });
      Class.belongsTo(models.course, { foreignKey: "courseId" });
      Class.hasMany(models.attendance,{foreignKey:"classId"})
    }
  
  
    
  
    return Class;
  }
  