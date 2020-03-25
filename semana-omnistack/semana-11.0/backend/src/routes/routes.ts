import * as express from "express"

const router = express.Router()

router.get('/health', (req, res) => res.send({ message: "healthCheck" }));

export default router;