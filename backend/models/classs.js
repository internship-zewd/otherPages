module.exports = (sequelize, DataTypes) => {
  const classs = sequelize.define('classs',
    {
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
      instructor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: 'classs',
      timestamps: false,
    }
  );

  classs.associate = (models) => {
    classs.hasMany(models.student, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    classs.belongsTo(models.instructor, { foreignKey: 'instructor_id', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    classs.belongsTo(models.course, { foreignKey: 'course_id', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
    classs.hasMany(models.attendance, { foreignKey: 'class_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  };

  return classs;
};