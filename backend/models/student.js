module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        phonenumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            },
        },
        addmitiondate: {
            type: DataTypes.DATE,
            // allowNull:false,
            validate: {
                notEmpty: true
            },
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
           
            },
        },
        classs: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,

            },
        },

        dob: {
            type: DataTypes.DATE,
            // allowNull:false,
            validate: {
               // notEmpty: true,
            },
        },
        registno:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
        
       
},{
    freezeTableName:true,
    tableName:'student',
    underscored:true

})
return student
}