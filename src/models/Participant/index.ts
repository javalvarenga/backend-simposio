import { callProcedure } from "../../utils/callProcedure";

export const getParticipants = async () => {
  return await callProcedure("getParticipants");
};

export const getParticipantById = async (idParticipante: number) => {
  const result = await callProcedure("getParticipantById", [idParticipante]);
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
  certificadoEnviado: boolean
) => {
  const result = await callProcedure("createParticipant", [
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
    certificadoEnviado
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
  certificadoEnviado: boolean
) => {
  return await callProcedure("updateParticipant", [
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
  ]);
};

export const deleteParticipant = async (idParticipante: number) => {
  return await callProcedure("deleteParticipant", [idParticipante]);
};