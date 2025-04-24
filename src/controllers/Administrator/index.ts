import { Request, Response } from 'express';
import * as AdministratorModel from '../../models/Administrator/index.js';
export const getAllAdministrators = async (req: Request, res: Response) => {
  try {
    const administrators = await AdministratorModel.getAdministrators();
    res.json(administrators);
  } catch (error) {
    console.error(error);  // Para ver el error en consola del servidor
    res.status(500).json({ message: 'Error fetching administrators' });
  }
};

// Login de administrador
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Verificar que el procedimiento esté retornando el administrador correctamente
    const admin = await AdministratorModel.getAdministratorByUsername(username);

    if (!admin) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    // Verifica la contraseña (en producción, deberías usar bcrypt para la validación)
    if (admin.password !== password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    return res.status(200).json({ message: "Inicio de sesión exitoso", admin });
  } catch (error) {
    console.error('Error al procesar la solicitud de login:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};