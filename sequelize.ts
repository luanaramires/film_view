import { Error, Sequelize } from'sequelize';

export const sequelize = new Sequelize ('dvdrental', 'localhost', '021329', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
});

export default() => {
sequelize
    .authenticate()
    .then(() =>{
        console.log('postgres conectado');
})
.catch((error: Error) => {
    console.log(`conexao mal sucedida: ${error}`);
});

};