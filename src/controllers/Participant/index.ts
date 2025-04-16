import { Request, Response } from 'express';
import * as ParticipantModel from '../../models/Participant/index';

export const getAllParticipants = async (req: Request, res: Response) => {

  console.log('controller getAllParticipants');

  try {
    const participants = await ParticipantModel.getParticipants();
    res.json(participants);
  } catch (error) {
    console.error('Error getting participants:', error);
    res.status(500).json({ message: 'Error fetching participants' });
  }
};

export const getParticipant = async (req: Request, res: Response) => {
  try {
    const participantId = parseInt(req.params.id, 10);
    const participant = await ParticipantModel.getParticipantById(participantId);

    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    res.json(participant);
  } catch (error) {
    console.error('Error getting participant:', error);
    res.status(500).json({ message: 'Error fetching participant' });
  }
};

export const createParticipant = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await ParticipantModel.createParticipant(name, email);
    res.status(201).json({ message: 'Participant created', result });
  } catch (error) {
    console.error('Error creating participant:', error);
    res.status(500).json({ message: 'Error creating participant' });
  }
};

export const updateParticipant = async (req: Request, res: Response) => {
  try {
    const participantId = parseInt(req.params.id, 10);
    const { name, email } = req.body;

    const result = await ParticipantModel.updateParticipant(participantId, name, email);
    res.json({ message: 'Participant updated', result });
  } catch (error) {
    console.error('Error updating participant:', error);
    res.status(500).json({ message: 'Error updating participant' });
  }
};

export const deleteParticipant = async (req: Request, res: Response) => {
  try {
    const participantId = parseInt(req.params.id, 10);
    const result = await ParticipantModel.deleteParticipant(participantId);
    res.json({ message: 'Participant deleted', result });
  } catch (error) {
    console.error('Error deleting participant:', error);
    res.status(500).json({ message: 'Error deleting participant' });
  }
};