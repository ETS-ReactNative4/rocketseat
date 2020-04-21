import * as express from "express"

import * as ongController from '../controllers/ongController';
import * as incidentsController from '../controllers/incidentController';

const router = express.Router()

router.get('/health', (req, res) => res.send({ message: "healthCheck" }));
router.get('/ongs', ongController.getAllOngs);
router.get('/incidents', incidentsController.getAllIncidents);
router.get('/profile', incidentsController.getIncidentsByOng)

router.post('/ongs', ongController.createOng);
router.post('/incidents', incidentsController.createIncident);
router.post('/session', ongController.loginAuthorization);

router.delete('/incidents/:incidentId', incidentsController.deleteIncident);

export default router;