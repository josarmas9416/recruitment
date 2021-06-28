'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contact.init({
    active: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 50]
      }
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 50]
      }
    },
    lastname: {
      type:DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    addres: { 
      type: DataTypes.STRING,
      validate: {
        len: [5, 200]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 50]
      }
    },
    photo: DataTypes.STRING,
    contract: DataTypes.STRING,
    state: DataTypes.STRING,
    salary: {
      type: DataTypes.DOUBLE,
      validate: {
        min: 0,
        max: 10000
      }}
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};