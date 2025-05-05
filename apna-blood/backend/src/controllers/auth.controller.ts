import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const register = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      bloodGroup,
      aadhaarNumber,
      address,
      city,
      state,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      phone,
      bloodGroup,
      aadhaarNumber,
      address,
      city,
      state,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bloodGroup: user.bloodGroup,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bloodGroup: user.bloodGroup,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const verifyAadhaar = async (req: Request, res: Response) => {
  try {
    const { aadhaarNumber } = req.body;

    // In a real application, this would integrate with the Aadhaar API
    // For demo purposes, we'll just validate the format
    if (!/^\d{12}$/.test(aadhaarNumber)) {
      return res.status(400).json({ message: 'Invalid Aadhaar number format' });
    }

    // Check if Aadhaar is already registered
    const existingUser = await User.findOne({ aadhaarNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'Aadhaar number already registered' });
    }

    // Generate OTP (in a real application, this would be sent via SMS)
    const otp = '123456'; // Demo OTP

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Aadhaar verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { aadhaarNumber, otp } = req.body;

    // In a real application, this would verify the OTP against the one sent
    // For demo purposes, we'll accept a specific OTP
    if (otp !== '123456') {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 