// src/services/api.service.ts

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ApiSuccessResponse<T = any> {
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  message: string;
  data?: any;
}

/**
 * Base API URL
 * Keep this in .env
 * VITE_API_BASE_URL=http://localhost:2001
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Generic API request helper
 */
const apiRequest = async <T>(
  url: string,
  options: RequestInit
): Promise<ApiSuccessResponse<T>> => {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "API request failed");
  }

  return result;
};

/**
 * Contact API
 */
export const sendContactMessage = (
  payload: ContactPayload
): Promise<ApiSuccessResponse<{ name: string; email: string }>> => {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
