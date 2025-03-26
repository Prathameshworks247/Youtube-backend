import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); // ✅ Define the app before using it

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static("public")); // ✅ Correct spellia
app.use(cookieParser())

export { app }; // ✅ Export after defining
