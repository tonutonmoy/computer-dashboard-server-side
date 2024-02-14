import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>({});

const ServiceModel = model<TService>("Service", serviceSchema);

export default ServiceModel;
