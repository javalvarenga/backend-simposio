import express from 'express';
import * as ParticipantController from '../../controllers/Participant';

console.log('ParticipantRoutes');

const router = express.Router();

router.get('/', ParticipantController.getAllParticipants);
router.get('/:id', ParticipantController.getParticipant);
router.post('/', ParticipantController.createParticipant);
router.put('/:id', ParticipantController.updateParticipant);
router.delete('/:id', ParticipantController.deleteParticipant);

export default router;