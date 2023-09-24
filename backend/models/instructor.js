module.exports=(sequelize,DataTypes)=>{
    const instructor=sequelize.define("instructor", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        id_tag:{
            type: DataTypes.STRING,
            allowNull:false,
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
        full_name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
      
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                isEmail:true,
            },
        },
        phone:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:false,
            },

            },
        salary:{
            type:DataTypes.DECIMAL(12,2),
            allowNull:false,
            validate:{
                notEmpty:true
            },
        },
<<<<<<< HEAD
        
=======
        employment_date:{
            type:DataTypes.DATEONLY,
             allowNull:false,
            validate:{
                // notEmpty:true,
                
        },
    },
>>>>>>> 8f99c5b050387a4b87b9cc323ff0db0fdf527481
}
    ,{
        freezeTableName:true,
        tableName:'instructor',
        underscored:true
    })
    return instructor
}
