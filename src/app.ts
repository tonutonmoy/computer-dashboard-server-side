import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./router";
import globalErrorHandler from "./app/errors/globalErrorHandler";
import bodyParser from 'body-parser';
import { router as paymentRouter } from "./modules/purchaseManagement/purchase.services"; 

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(
  cors({
    origin: "https://computer-management-dashboard.firebaseapp.com",
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

app.use("/api", router);
app.use("/payment", paymentRouter);

app.use(globalErrorHandler);

// app.use(notFound);

export default app;
