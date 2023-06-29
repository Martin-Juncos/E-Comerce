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
        gender: {
          type: DataTypes.STRING,
          //unique : true
      },
      age: {
        type: DataTypes.INTEGER,
        //unique : true
    },
        email: {
            type: DataTypes.STRING,
            //unique : true
        },
        phone: {
            type: DataTypes.STRING,
            //allowNull: false
        },
        adress: {
          type: DataTypes.STRING
        },
        city: {
          type: DataTypes.STRING
        },
        zipCode: {
          type: DataTypes.STRING
        }
    },{timestamps:false})
  }