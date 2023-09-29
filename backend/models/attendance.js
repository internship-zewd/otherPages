module.exports=(sequelize,DataTypes)=>{
    const attendance=sequelize.define("attendance",{
        id:{
            type:DataTypes.INTEGER,
            autoIncremnt:true,
            primaryKey:true,

        },
        classId:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        day:{
            type:DataTypes.INTEGER,
            autoIncremnt:true,
            allowNull:false,
        },
        
        mark_attendance:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            validate:{
                notEmpty:true
            },

        },


    },{
        freezeTableName:true,
        tableName:"attendance",
        underscored:true


    }
    )
    attendance.associate=(models)=>{
        attendance.hasMany(models.student,{foreignKey:"attendanceId"})
        attendance.belongsTo(models.Class,{foreignKey:"classId"})

    }
return attendance;
}