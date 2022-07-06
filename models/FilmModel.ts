import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/sequelize';

class Film extends Model {}

Film.init({

}, {
    sequelize,
    modelName: 'film'
});

export default Film;