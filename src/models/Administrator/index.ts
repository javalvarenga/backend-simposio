import { callProcedure } from '../../utils/callProcedure';

export const getAdministrators = async () => {
  return await callProcedure('getAdministrators');
};

