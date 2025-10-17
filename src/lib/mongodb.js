import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(" Please define the MONGODB_URI in .env.local");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "my-store",
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (err) {
        console.error("DB connection error:", err);
    }
};
