import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from "./backend/routes/auth.routes.js";
import messageRoutes from "./backend/routes/message.routes.js";
import userRoutes from "./backend/routes/user.routes.js";

import connectToMongoDB from "./backend/db/connectToMongoDB.js";
import { app, server } from "./backend/socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
	origin: ["http://localhost:5173","http://localhost:3000","https://realtime-chatt.netlify.app" ],
	credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/ClientSide/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "ClientSide", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
