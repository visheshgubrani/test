import { asyncHandler } from "../utils/asyncHandler.js";
import { Workout } from "../models/workout.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addWorkout = asyncHandler(async(req, res) => {
    const {name, instructions, sets, reps, completed} = req.body

    if (!(name)) {
        throw new ApiError(400, 'Please Include the name of the workout')
    }

    const workout = await Workout.create({
        name, instructions, sets, reps, completed
    })

    return res.status(200).json(
        new ApiResponse(200, 'Workout added successfully', workout)
    )
})

export {addWorkout}