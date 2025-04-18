import { Request, Response } from 'express';
import * as AdministratorModel from '../../models/Administrator/index';
export const getAllAdministrators = async (req: Request, res: Response) => {

  try {
    const adminsitrators = await AdministratorModel.getAdministrators();
    res.json(adminsitrators);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adminsitrators' });
  }
};