import { callProcedure } from '../../utils/callProcedure.js';

export const getAdministrators = async () => {
  return await callProcedure('getAdministrators');
};

