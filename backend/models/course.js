module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
       course_name: {
        type: DataTypes.STRING,
         allowNull:false,
            validate:{
                notEmpty:true
            },
      },
       course_fee: {
        type:DataTypes.DECIMAL(12,2),
         allowNull:false,
            validate:{
                notEmpty:true
            },
      },
       course_duration: {
        type: DataTypes.INTEGER,
         allowNull:false,
            validate:{
                notEmpty:true
            },
      },
       
        
       
},{
    freezeTableName:true,
    tableName:'course',
    underscored:true

})
return course
}