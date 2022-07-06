import express, { Express, Request, Response } from 'express';
import sequelize from './database/sequelize';

import films from './app/controllers/FilmController';


const app: Express = express();
const port: number = 3333;

app.use('/films', films);

app.get('/', (req:Request, res: Response) => {
    res.send('Hello world express + TS')
});

app.listen(3333, () => {
    console.log(`servidor rodando na porta ${port}`)
});

sequelize();
