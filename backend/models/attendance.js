module.exports=(sequelize,DataTypes)=>{
    const attendance=sequelize.define("attendance",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,

        },
        class_id:{
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        student_id: {
            type:DataTypes.INTEGER,
            allowNull:false,

        },
        idTagValue:{
            type:DataTypes.STRING,
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
        attendance.belongsTo(models.student,{foreignKey:"student_id"})
        attendance.belongsTo(models.classs,{foreignKey:"class_id"})
        attendance.belongsTo(models.instructor,{foreignKey:"instructor_id"})

    }
return attendance;
}