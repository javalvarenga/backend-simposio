import { Request, Response } from 'express';

import { generarCertificado } from "../../utils/pdfGenerator.js"
//import { enviarCertificado } from "../../utils/mailer.js"
import { generarCodigoQR } from "../../utils/qrGenerator.js";
import { enviarQR } from "../../utils/mailer.js";


import * as ParticipantModel from '../../models/Participant/index.js';
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
      certificadoEnviado,
      tipoPago,
      boleta,
      estadoPago  
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
      certificadoEnviado,
      tipoPago,
      boleta,
      estadoPago
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
      certificadoEnviado,
      tipoPago,
      boleta,
      estadoPago
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
      certificadoEnviado,
      tipoPago,
      boleta, 
      estadoPago
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

export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const status = req.body.estadoPago;
    const result = await ParticipantModel.updatePaymentStatus(idParticipante, status);
    
    if (status === 'C') {
      const participante = await ParticipantModel.getParticipantById(idParticipante);
      console.log(participante);
      const qrData = participante.codigoQR;
      const qrImage = await generarCodigoQR(qrData);
      console.log(qrImage);
      await enviarQR(participante.correoElectronico, participante.nombre, qrImage);
      
    }

    res.json({ message: 'Estado de pago actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar estado de pago:', error);
    res.status(500).json({ message: 'Error al actualizar estado de pago' });
  }
};

export const updateKitStatus = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const status = req.body.kit;
    const result = await ParticipantModel.updateKitStatus(idParticipante, status);
    
    res.json({ message: 'Estado del kit actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar estado del kit:', error);
    res.status(500).json({ message: 'Error al actualizar estado del kit' });
  }
};

export const updateCertStatus = async (req: Request, res: Response) => {
  try {
    const idParticipante = parseInt(req.params.id, 10);
    const status = req.body.certificadoEnviado;
    const result = await ParticipantModel.updateCertStatus(idParticipante, status);
    
    res.json({ message: 'Estado del certificado actualizado exitosamente', result });
  } catch (error) {
    console.error('Error al actualizar estado del certificado:', error);
    res.status(500).json({ message: 'Error al actualizar estado del certificado' });
  }
};


/*export const enviarCertificados = async (_req: Request, res: Response) => {
  try {
    const participantes = await ParticipantModel.getAsistencia()

    for (const participante of participantes) {
      const certificado = generarCertificado(participante.nombre)
      await enviarCertificado(participante.correoElectronico, certificado, participante.nombre)
    }

    res.status(200).json({ message: "Certificados enviados con éxito" })
  } catch (error) {
    console.error("Error al enviar certificados:", error)
    res.status(500).json({ message: "Error al enviar certificados" })
  }
}*/