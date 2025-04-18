import express from 'express';
import * as AdministratorController from '../../controllers/Administrator';

const router = express.Router();

router.get('/', AdministratorController.getAllAdministrators);


export default router;