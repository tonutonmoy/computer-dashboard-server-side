import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./router";
import globalErrorHandler from "./app/errors/globalErrorHandler";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);

app.use(globalErrorHandler);

// app.use(notFound);

export default app;
