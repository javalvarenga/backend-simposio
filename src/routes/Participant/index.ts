import express from "express";
import * as ParticipantController from "../../controllers/Participant/index.js";
import { generarCertificado } from "../../utils/pdfGenerator.js"

console.log("ParticipantRoutes");

const router = express.Router();


router.get("/", ParticipantController.getParticipants);
router.get("/:id", ParticipantController.getParticipantById);
router.post("/", ParticipantController.createParticipant);
router.put("/:id", ParticipantController.updateParticipant);
router.delete("/:id", ParticipantController.deleteParticipant);
router.patch("/updatePaymentStatus/:id", ParticipantController.updatePaymentStatus);
router.patch("/updateKitStatus/:id", ParticipantController.updateKitStatus);
router.patch("/updateCertStatus/:id", ParticipantController.updateCertStatus);
//router.post("/send-certificates", ParticipantController.enviarCertificados);  



export default router;
