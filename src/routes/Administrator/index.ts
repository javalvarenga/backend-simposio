import express from 'express';
import * as AdministratorController from '../../controllers/Administrator/index.js';

const router = express.Router();

router.get("/", AdministratorController.getAllAdministrators);
router.post("/", AdministratorController.login);

export default router;