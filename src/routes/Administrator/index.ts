import express from 'express';
import * as AdministratorController from '../../controllers/Administrator';

const router = express.Router();

router.get('/', AdministratorController.getAllAdministrators);
router.post("/login", AdministratorController.login);

export default router;