import { callProcedure } from '../../utils/callProcedure';

export const getAdministrators = async () => {
  return await callProcedure('getAdministrators');
};

// Obtener un administrador por su username
export const getAdministratorByUsername = async (username: string) => {
  try {
    const result = await callProcedure("getAdministratorByUsername", [username]);
    // Suponiendo que el procedimiento retorna un solo resultado
    return result[0] || null;  // Retorna el primer administrador o null si no existe
  } catch (error) {
    console.error('Error al obtener administrador por username:', error);
    throw new Error('Error al obtener administrador por username');
  }
};