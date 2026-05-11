import axios from "axios"
import { API_BASE } from "../utils/const"



export type LoginUser = {
  id: number
  login: string
  nombre: string
  perfil: string
  activo: boolean
  imei: string
}

type LoginResponse = {
  ok: boolean
  mensaje: string
  usuario?: LoginUser
}

export type LoginCredentials = {
  login: string
  pass: string
}

export const authenticateLogin = async (credentials: LoginCredentials): Promise<LoginUser> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE}/login`, credentials)

    if (!response.data.ok || !response.data.usuario) {
      throw new Error(response.data.mensaje || 'No fue posible iniciar sesion.')
    }

    return response.data.usuario
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const serverMsg = (error.response && (error.response.data as any)?.mensaje) || error.message
      throw new Error(typeof serverMsg === 'string' ? serverMsg : 'No fue posible iniciar sesion.')
    }

    throw error instanceof Error ? error : new Error('No fue posible iniciar sesion.')
  }
}