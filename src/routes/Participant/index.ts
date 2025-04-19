import express from "express";
import * as ParticipantController from "../../controllers/Participant";

console.log("ParticipantRoutes");

const router = express.Router();

router.get("/", ParticipantController.getParticipants);
router.get("/:id", ParticipantController.getParticipantById);
router.post("/", ParticipantController.createParticipant);
router.put("/:id", ParticipantController.updateParticipant);
router.delete("/:id", ParticipantController.deleteParticipant);
router.patch("/updatePaymentStatus/:id", ParticipantController.updatePaymentStatus);

export default router;
