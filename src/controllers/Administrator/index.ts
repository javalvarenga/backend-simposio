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
// Login de administrador
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const admin = await AdministratorModel.getAdministratorByUsername(username);

    if (!admin) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    // Si usas bcrypt para contraseñas hasheadas, aquí va:
    // const validPassword = await bcrypt.compare(password, admin.password);
    // if (!validPassword) return res.status(401).json({ error: "Contraseña incorrecta" });

    if (admin.password !== password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    return res.status(200).json({ message: "Inicio de sesión exitoso", admin });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};