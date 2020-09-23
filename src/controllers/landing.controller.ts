import {Request, Response, Router} from 'express';
import Landing, {ILanding} from '../models/landing';

class LandingController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async createLanding(req: Request, res: Response): Promise<void> {
       
        const landing: ILanding = new Landing(req.body);

        console.log(landing);

        res.json({
            ok: true,
            landing
        });
    }
    
    routes() {
        this.router.post('/', this.createLanding);
    }
}

const landingController = new LandingController();
export default landingController.router;