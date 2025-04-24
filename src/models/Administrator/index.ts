import { callProcedure } from '../../utils/callProcedure';

export const getAdministrators = async () => {
  return await callProcedure('getAdministrators');
};

// Obtener un administrador por su username
export const getAdministratorByUsername = async (username: string) => {
  const result = await callProcedure("getAdministratorByUsername", [username]);
  // Suponiendo que el procedimiento retorna un solo resultado
  return result[0] || null;
};
