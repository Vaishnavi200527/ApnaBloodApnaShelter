import mongoose from 'mongoose';
import { IUser } from './User';

export interface IDonation extends mongoose.Document {
  donor: IUser['_id'];
  bloodBank: string;
  donationDate: Date;
  units: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

const donationSchema = new mongoose.Schema<IDonation>(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bloodBank: {
      type: String,
      required: true,
    },
    donationDate: {
      type: Date,
      required: true,
    },
    units: {
      type: Number,
      required: true,
      default: 1,
    },
    status: {
      type: String,
      required: true,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Donation = mongoose.model<IDonation>('Donation', donationSchema); 