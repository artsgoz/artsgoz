import { apiClient, getAuthHeaders } from './client.js';
import type {
  AdminDashboardResponse,
  LoginRequest,
  LoginResponse,
  MeResponse,
  RegisterRequest,
  UpdateUserRoleRequest,
  User,
} from './types.js';

export const register = async (data: RegisterRequest): Promise<{ message: string }> => {
  const res = await apiClient.post<{ message: string }>('/register', data);
  return res.data;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await apiClient.post<LoginResponse>('/login', data);
  return res.data;
};

export const getMe = async (token: string): Promise<MeResponse> => {
  const res = await apiClient.get<MeResponse>('/me', getAuthHeaders(token));
  return res.data;
};

export const getAdminDashboard = async (token: string): Promise<AdminDashboardResponse> => {
  const res = await apiClient.get<AdminDashboardResponse>('/admin/dashboard', getAuthHeaders(token));
  return res.data;
};

export const getAdminUsers = async (token: string): Promise<User[]> => {
  const res = await apiClient.get<User[]>('/admin/users', getAuthHeaders(token));
  return res.data;
};

export const updateUserRole = async (
  uid: string,
  role: string,
  token: string
): Promise<{ message: string }> => {
  const reqBody: UpdateUserRoleRequest = { role };
  const res = await apiClient.put<{ message: string }>(
    `/admin/users/${uid}/role`,
    reqBody,
    getAuthHeaders(token)
  );
  return res.data;
};
