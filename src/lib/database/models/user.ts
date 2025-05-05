import mongoose, { Schema, models, model } from 'mongoose';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    isAdmin: { 
      type: Boolean, 
      default: false 
    },
  },
  { 
    timestamps: true 
  }
);

export const User = models.User || model<IUser>('User', userSchema); 