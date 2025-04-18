import { Request, Response } from 'express';
import * as ParticipantModel from '../../models/Participant/index';
export const createParticipant = async (req: Request, res: Response) => {
  try {
    const {
      carnetIdentificacion,
      nombre,
      apellido,
      correoElectronico,
      numeroTelefono,
      empresaInstitucion,
      tipoParticipante,
      codigoQR,
      idPago,
      Evento_PK
    } = req.body;

    const result = await ParticipantModel.createParticipant(
      carnetIdentificacion,
      nombre,
      apellido,
      correoElectronico,
      numeroTelefono,
      empresaInstitucion,
      tipoParticipante,
      codigoQR,
      idPago,
      Evento_PK
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
    const id_participante = parseInt(req.params.id, 10);
    const {
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
      Asistencia
    } = req.body;

    const result = await ParticipantModel.updateParticipant(
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
      Asistencia
    );
    
    res.json({ message: 'Participante actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar participante:', error);
    res.status(500).json({ message: 'Error al actualizar participante' });
  }
};

export const deleteParticipant = async (req: Request, res: Response) => {
  try {
    const id_participante = parseInt(req.params.id, 10);
    const result = await ParticipantModel.deleteParticipant(id_participante);

    
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
    const id_participante = parseInt(req.params.id, 10);
    const participant = await ParticipantModel.getParticipantById(id_participante);
    
    if (!participant) {
      return res.status(404).json({ message: 'Participante no encontrado' });
    }
    
    res.json(participant);
  } catch (error) {
    console.error('Error al obtener participante:', error);
    res.status(500).json({ message: 'Error al obtener participante' });
  }
};

export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const id_participante = parseInt(req.params.id, 10);
    const status = req.body.estadoPago;
    const result = await ParticipantModel.updatePaymentStatus(id_participante, status);
    
    res.json({ message: 'Estado de pago actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar estado de pago:', error);
    res.status(500).json({ message: 'Error al actualizar estado de pago' });
  }
};