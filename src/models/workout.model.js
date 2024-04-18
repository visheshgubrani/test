import mongoose, {Schema} from "mongoose";

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    instructions: {
        type: [String]
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    completed: {
        type: Boolean
    }
}, {timestamps: true})

export const Workout = mongoose.model('Workout', workoutSchema)