import { Request, Response, Router } from "express";
import { request } from "http";
import * as service from '../services/FilmService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    service.getAll().then(silms) => {
        res.send(films);
    };
});

export default router;