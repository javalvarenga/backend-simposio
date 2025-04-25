import { callProcedure } from "../../utils/callProcedure.js";

export const getParticipants = async () => {
  return await callProcedure("getParticipantPayment", []);
};

export const getParticipantById = async (idParticipante: number) => {
  const result = await callProcedure("getParticipantPaymentById", [idParticipante]);
  return result[0] || null;
};

export const createParticipant = async (
  tipoParticipante: 'E' | 'C' | 'I',
  nombre: string,
  carnetCarrera: number | null,
  carnetAnio: number | null,
  carnetSerie: number | null,
  correoElectronico: string,
  telefono: number,
  talla: 'XL' | 'L' | 'M' | 'S',
  fechaNacimiento: string, // formato 'YYYY-MM-DD'
  institucion: string | null,
  Rol: string,
  codigoQR: string,
  certificadoEnviado: boolean,
  tipoPago: 'E' | 'D',
  boleta: string,
  estadoPago: 'C' | 'P' | 'R' | 'V'
) => {
  const result = await callProcedure("createParticipantPayment", [
    tipoParticipante,
    nombre,
    carnetCarrera,
    carnetAnio,
    carnetSerie,
    correoElectronico,
    telefono,
    talla,
    fechaNacimiento,
    institucion,
    Rol,
    codigoQR,
    certificadoEnviado,
    tipoPago,
    boleta && boleta.includes(",") ? boleta.split(",")[1] : null,
    estadoPago
  ]);

  return result;
};

export const updateParticipant = async (
  idParticipante: number,
  tipoParticipante: 'E' | 'C' | 'I',
  nombre: string,
  carnetCarrera: number | null,
  carnetAnio: number | null,
  carnetSerie: number | null,
  correoElectronico: string,
  telefono: number,
  talla: 'XL' | 'L' | 'M' | 'S',
  fechaNacimiento: string,
  institucion: string | null,
  Rol: string,
  codigoQR: string,
  certificadoEnviado: boolean,
  tipoPago: 'E' | 'D',
  boleta: string,
  estadoPago: 'C' | 'P' | 'R' | 'V'
) => {
  return await callProcedure("updateParticipantPayment", [
    idParticipante,
    tipoParticipante,
    nombre,
    carnetCarrera,
    carnetAnio,
    carnetSerie,
    correoElectronico,
    telefono,
    talla,
    fechaNacimiento,
    institucion,
    Rol,
    codigoQR,
    certificadoEnviado ? 1 : 0,
    tipoPago,
    boleta,
    estadoPago
  ]);
};

export const deleteParticipant = async (idParticipante: number) => {
  return await callProcedure("deleteParticipant", [idParticipante]);
};

export const updatePaymentStatus = async (idParticipante: number, status: string) => {
  return await callProcedure("updatePaymentStatus", [idParticipante, status]);
};

export const updateKitStatus = async (idParticipante: number, status: number) => {
  return await callProcedure("updateKitStatus", [idParticipante, status]);
};

export const updateCertStatus = async (idParticipante: number, status: number) => {
  return await callProcedure("updateCertStatus", [idParticipante, status]);
};

export const getAsistencia = async () => {
  const [result]: any = await callProcedure("getAsistencia")
  return result
}

export const updateQRCode = async (idParticipante: number, codigoQR: string) => {
  return await callProcedure("updateQRCode", [idParticipante, codigoQR]);
};