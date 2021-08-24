import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        members: {
            type: String,
            required: true,
        },
        mentors: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        id: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
