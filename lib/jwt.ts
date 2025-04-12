// src/lib/jwt.ts
/*import jwt from 'jsonwebtoken'

interface JwtPayload {
  userId: number
  iat?: number
  exp?: number
}

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET must be at least 32 characters long')
}

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' })
}

export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwt.decode(token) as JwtPayload
  } catch {
    return null
  }
}*/

/*
import jwt from 'jsonwebtoken';
import { User } from 'types'; 

// Validate JWT secret
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('JWT_SECRET is required in production');
}

// Type-safe JWT options
interface JwtOptions extends jwt.SignOptions {
  expiresIn: string | number;
}

const DEFAULT_JWT_OPTIONS: JwtOptions = {
  expiresIn: '7d' // 7 days
};

interface JwtPayload {
  userId: number;
  iat?: number;
  exp?: number;
  tokenVersion?: number;
}

export const generateAuthTokens = (user: User) => {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }

  const accessToken = jwt.sign(
    { userId: user.id },
    JWT_SECRET,
    { expiresIn: DEFAULT_JWT_OPTIONS.expiresIn }
  );
  
  const refreshToken = jwt.sign(
    { 
      userId: user.id, 
      tokenVersion: user.tokenVersion 
    },
    JWT_SECRET,
    { expiresIn: '30d' }
  );

  return { accessToken, refreshToken };
};

export const verifyToken = <T extends JwtPayload>(token: string): T => {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }
  return jwt.verify(token, JWT_SECRET) as T;
};

export const decodeToken = <T extends JwtPayload>(token: string): T | null => {
  try {
    return jwt.decode(token) as T;
  } catch {
    return null;
  }
};*/

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default_dev_secret_32_chars_long_123';

type UserPayload = {
  userId: number;
};

export const createToken = (userId: number): string => {
  return jwt.sign({ userId }, secret, { expiresIn: '7d' });
};

export const verifyToken = (token: string): UserPayload => {
  return jwt.verify(token, secret) as UserPayload;
};