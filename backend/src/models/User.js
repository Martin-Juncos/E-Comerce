  const { DataTypes } = require("sequelize")


  module.exports = (database) => {
    database.define("User",{
        id : {
            type: DataTypes.UUID,
            primaryKey : true,
            defaultValue: DataTypes.UUIDV4
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: "Name is required"
                }
              }
        },
        email: {
            type: DataTypes.STRING,
            //unique : true
        },
        phone: {
            type: DataTypes.STRING,
            //allowNull: false
        }
    },{timestamps:false})
  }