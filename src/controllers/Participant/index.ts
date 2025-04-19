import { Request, Response } from 'express';
import * as ParticipantModel from '../../models/Participant/index';
export const createParticipant = async (req: Request, res: Response) => {
  try {
    const {
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
    } = req.body;

    const result = await ParticipantModel.createParticipant(
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
    );
    
    res.status(201).json({ 
      message: 'Participante creado exitosamente', 
      result: result 
    });
  } catch (error) {
    console.error('Error al crear participante:', error);
    res.status(500).json({ message: 'Error al crear participante' });
  }
};

export const updateParticipant = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const {
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
    } = req.body;

    const result = await ParticipantModel.updateParticipant(
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
      certificadoEnviado
    );
    
    res.json({ message: 'Participante actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar participante:', error);
    res.status(500).json({ message: 'Error al actualizar participante' });
  }
};

export const deleteParticipant = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const result = await ParticipantModel.deleteParticipant(idParticipante);

    
    res.json({ message: 'Participante eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar participante:', error);
    res.status(500).json({ message: 'Error al eliminar participante' });
  }
};

export const getParticipants = async (_req: Request, res: Response) => {
  try {
    const participants = await ParticipantModel.getParticipants();
    res.json(participants);
  } catch (error) {
    console.error('Error al obtener participantes:', error);
    res.status(500).json({ message: 'Error al obtener participantes' });
  }
};

export const getParticipantById = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const participant = await ParticipantModel.getParticipantById(idParticipante);
    
    if (!participant) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    
    res.json(participant);
  } catch (error) {
    console.error('Error al obtener participante:', error);
    res.status(500).json({ message: 'Error al obtener participante' });
  }
};