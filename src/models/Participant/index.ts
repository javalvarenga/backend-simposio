import { callProcedure } from "../../utils/callProcedure";

export const getParticipants = async () => {
  return await callProcedure("getParticipants");
};

export const getParticipantById = async (id_participante: number) => {
  const result = await callProcedure("getParticipantById", [id_participante]);
  return result[0] || null;
};

export const createParticipant = async (
  tipoParticipante: string,
  nombre: string,
  carnetCarrera: string | null,
  carnetAnio: string | null,
  carnetSerie: string | null,
  correoElectronico: string,
  numeroTelefono: string,
  tallaCamisa: string,
  fechaNacimiento: string,
  empresaInstitucion: string,
  rol: string,
  codigoQR: string,
  certificadoEnviado: number|null,
  tipoPago: string | null,
  boleta:string | null,
  estadoPago: string | null
) => {
  // For stored procedures with OUT parameters, the last parameter is for the output
  const result = await callProcedure("createParticipantPayment", [
    tipoParticipante,
    nombre,
    carnetCarrera,
    carnetAnio,
    carnetSerie,
    correoElectronico,
    numeroTelefono,
    tallaCamisa,
    fechaNacimiento,
    empresaInstitucion,
    rol,
    codigoQR,
    certificadoEnviado,
    tipoPago,
    boleta,
    estadoPago
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