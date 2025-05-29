// mobile/api/auth.ts
import client from '@/libs/axios';

export async function loginApi(email: string, password: string) {
  const response = await client.post('/auth/login', { email, password });
  return response.data;
}
