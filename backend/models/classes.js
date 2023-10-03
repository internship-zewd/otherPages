module.exports = (sequelize, DataTypes) => {
    const classes = sequelize.define("classes", {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      idTag: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
        classes_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },

        course_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

        course: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
           
            },
        },
        insructor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
           
            },
        },
        
         fullIdentification: {
        type: DataTypes.STRING
      }
    

       
},{
    freezeTableName:true,
    tableName:'classes',
    underscored:true

})
classes.associate = (models) => {
   classes.belongsTo(models.course, { foreignKey: 'course_id' ,as:'classes_course'});
  
  };
return classes
}