import { callProcedure } from '../../utils/callProcedure';

export const getParticipants = async () => {
  return await callProcedure('getParticipants');
};

export const getParticipantById = async (participantId: number) => {
  const result = await callProcedure('getParticipantById', [participantId]);
  return result[0] || null;
};

export const createParticipant = async (name: string, email: string) => {
  return await callProcedure('createParticipant', [name, email]);
};

export const updateParticipant = async (participantId: number, name: string, email: string) => {
  return await callProcedure('updateParticipant', [participantId, name, email]);
};

export const deleteParticipant = async (participantId: number) => {
  return await callProcedure('deleteParticipant', [participantId]);
};