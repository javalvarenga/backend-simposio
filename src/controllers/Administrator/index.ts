import { Request, Response } from 'express';
import * as AdministratorModel from '../../models/Administrator/index';

// Obtener todos los administradores
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
    const admin = await AdministratorModel.getAdministratorByUsername(username);

    if (!admin) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    // Si usas bcrypt para contraseñas hasheadas, aquí va:
    // const validPassword = await bcrypt.compare(password, admin.password);
    // if (!validPassword) return res.status(401).json({ error: "Contraseña incorrecta" });

    // Comparar la contraseña en texto plano (actualmente tu enfoque)
    if (admin.password !== password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Si todo es correcto, responder con mensaje de éxito y los datos del admin
    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      admin: {
        id: admin.id,  // Solo lo que quieres exponer del admin
        username: admin.username,
        nombre: admin.nombre
      }
    });
  } catch (error) {
    console.error(error);  // Para ver el error en consola del servidor
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};
