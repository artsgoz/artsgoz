import axios, { type AxiosRequestConfig } from 'axios';
import { auth } from '../lib/firebase.js';

const BASE_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8080';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFirebaseIdToken = async (forceRefresh = false): Promise<string | null> => {
  const currentUser = auth.currentUser;
  if (!currentUser) return null;
  return currentUser.getIdToken(forceRefresh);
};

export const getAuthHeaders = (token?: string): AxiosRequestConfig => {
  if (!token) return {};
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAuthHeadersWithCurrentFirebaseUser = async (): Promise<AxiosRequestConfig> => {
  const token = await getFirebaseIdToken();
  return getAuthHeaders(token || undefined);
};

