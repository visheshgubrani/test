import { Router } from "express";
import { addWorkout } from "../controllers/workout.controller.js";

const router = Router()

router.route('/').post(addWorkout)

export default router