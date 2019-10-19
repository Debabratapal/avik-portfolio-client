import dotenv from 'dotenv';
dotenv.config();

export const api = {
  baseURL: process.env.NODE_ENV==='production' ? 'http://34.207.94.86:4000' : 'http://localhost:4000',
}