import { callProcedure } from "../../utils/callProcedure";

export const getParticipants = async () => {
  return await callProcedure("getParticipants");
};

export const getParticipantById = async (id_participante: number) => {
  const result = await callProcedure("getParticipantById", [id_participante]);
  return result[0] || null;
};

export const createParticipant = async (
  carnetIdentificacion: string | null,
  nombre: string,
  apellido: string,
  correoElectronico: string,
  numeroTelefono: string,
  empresaInstitucion: string,
  tipoParticipante: string,
  codigoQR: string,
  idPago: string | null,
  Evento_PK: number
) => {
  // For stored procedures with OUT parameters, the last parameter is for the output
  const result = await callProcedure("createParticipant", [
    carnetIdentificacion,
    nombre,
    apellido,
    correoElectronico,
    numeroTelefono,
    empresaInstitucion,
    tipoParticipante,
    codigoQR,
    idPago,
    Evento_PK,
  ]);

  return result;
};

export const updateParticipant = async (
  id_participante: number,
  carnetIdentificacion: string | null,
  nombre: string,
  apellido: string,
  correoElectronico: string,
  numeroTelefono: string,
  empresaInstitucion: string,
  tipoParticipante: string,
  codigoQR: string,
  idPago: string | null,
  certificadoEnviado: boolean,
  Evento_PK: number,
  Asistencia: boolean
) => {
  return await callProcedure("updateParticipant", [
    id_participante,
    carnetIdentificacion,
    nombre,
    apellido,
    correoElectronico,
    numeroTelefono,
    empresaInstitucion,
    tipoParticipante,
    codigoQR,
    idPago,
    certificadoEnviado,
    Evento_PK,
    Asistencia,
  ]);
};

export const deleteParticipant = async (id_participante: number) => {
  return await callProcedure("deleteParticipant", [id_participante]);
};


export const updatePaymentStatus = async (id_participante: number, status: string) => {
  return await callProcedure("updatePaymentStatus", [id_participante, status]);
};