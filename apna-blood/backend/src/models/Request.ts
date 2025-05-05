import mongoose from 'mongoose';
import { IUser } from './User';

export interface IRequest extends mongoose.Document {
  requester: IUser['_id'];
  patientName: string;
  bloodGroup: string;
  units: number;
  hospital: string;
  hospitalAddress: string;
  requiredDate: Date;
  status: 'pending' | 'approved' | 'fulfilled' | 'cancelled';
  urgency: 'normal' | 'urgent';
  purpose: string;
  notes?: string;
}

const requestSchema = new mongoose.Schema<IRequest>(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    units: {
      type: Number,
      required: true,
      min: 1,
    },
    hospital: {
      type: String,
      required: true,
    },
    hospitalAddress: {
      type: String,
      required: true,
    },
    requiredDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'approved', 'fulfilled', 'cancelled'],
      default: 'pending',
    },
    urgency: {
      type: String,
      required: true,
      enum: ['normal', 'urgent'],
      default: 'normal',
    },
    purpose: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Request = mongoose.model<IRequest>('Request', requestSchema); 