import axios, { AxiosError } from "axios";
import { InfoCircle } from 'iconsax-react';
import {
  Center,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  TypographyStylesProvider,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { TOKEN_KEY } from '@/config/constants';

// Global navigation function that can be set from the app
let globalNavigate: ((path: string) => void) | null = null;

export const setGlobalNavigate = (navigate: (path: string) => void) => {
  globalNavigate = navigate;
};

export const appAxiosInstance = axios.create({
  // Prevent indefinite pending requests that keep query loading states stuck.
  baseURL: process.env.NEXT_PUBLIC_CORE_HOST || undefined,
  timeout: 15000,
});

// Add a response interceptor
appAxiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error: AxiosError) => {
    console.log('error', error);
    const data = error.response?.data as any;

    if (error.response) {
    } else if (error.request) {
    } else {
      showNotification({
        message: 'An error occurred while processing your request',
      });
    }
    // Return a rejected promise with the error
    return Promise.reject(error);
  }
);

appAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || '';
    if (token && token !== 'null' && token !== 'undefined' && token !== 'null' && token !== '') {
      config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
      const appCredentials = localStorage.getItem('app-credentials');
      if (appCredentials) {
        const appCredentialsData = JSON.parse(appCredentials);

        console.log(appCredentialsData, 'appCredentialsData');
      //@ts-ignore
      const memberId = appCredentialsData.activeMemberId;
        //@ts-ignore
        const branchId = appCredentialsData.activeBranchId;
        console.log(memberId, branchId, 'appCredentials');
        if (memberId && branchId) {
          config.headers['x-member-id'] = memberId;
          config.headers['x-branch-id'] = branchId;
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface ErrorResponse {
  error: string;
  status: string;
}

export const handleAxiosError = (
  error: unknown,
  showToast = false,
  type: 'modal' | 'toast' = 'toast'
): ErrorResponse => {
  type = 'toast';


  let errorResponse: ErrorResponse = {
    error: 'An unexpected error occurred.',
    status: 'System Error',
  };

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;

    // // Extract error message from response data if available
    const extractErrorMessage = (data: any): string | null => {
      try {
        console.log(data, 'data');
        if (!data) return null;

        if (typeof data === 'object') {
          // Prefer detailed message when present
          if ('message' in data) {
            const msg = (data as any).message;
            if (typeof msg === 'string') {
              return msg;
            }
            if (Array.isArray(msg)) {
              return msg.join(', ');
            }
          }

          // Fallback to error field
          if ('error' in data && typeof (data as any).error === 'string') {
            const cleaned = ((data as any).error as string).split('-')[0].trim();
            return cleaned || (data as any).error;
          }
        }

        // If the data itself is a string, return it
        if (typeof data === 'string') {
          return data;
        }

        return null;
      } catch (ex) {
        console.error('Failed to extract error message:', ex);
        return null;
      }
    };

    // // Handle specific HTTP status codes
    if (axiosError.response) {
      const status = axiosError.response.status;
      const responseData = axiosError.response.data;
      const errorMessage = extractErrorMessage(responseData);

      switch (status) {
        case 400:
          errorResponse = {
            error: errorMessage || 'Bad request. Please check your input and try again.',
            status: 'Your request can not be processed',
          };
          break;
        case 401:
          errorResponse = {
            error: errorMessage || 'Your session has expired. Please login again.',
            status: 'Authentication Required',
          };
          return errorResponse;
        case 402:
          errorResponse = {
            error: errorMessage || 'Payment required. Please update your subscription.',
            status: 'Payment Required',
          };
          alert(`${errorResponse.error} You will be redirected to the billing page in 3 seconds.`);
          setTimeout(() => {
            const targetPath = '/settings/business-settings/billing';
            if (globalNavigate) {
              // Use React Router navigation if available
              globalNavigate(targetPath);
            } else {
              // Fallback to window.location for web
              if (window.location.pathname !== targetPath) {
                window.location.href = targetPath;
                window.location.reload();
              }
            }
          }, 3000);
          return errorResponse;
        case 432:
          errorResponse = {
            error: errorMessage || 'Forced logout. Contact support to reactivate your account.',
            status: 'Forced Logout',
          };
          alert('Contact support to reactivate your account. You will be logged out in 3 seconds.');
          setTimeout(() => {
            localStorage.clear();
            if (globalNavigate) {
              // Use React Router navigation if available
              globalNavigate('/login');
            } else {
              // Fallback to window.location for web
              window.location.href = '/login';
              window.location.reload();
            }
          }, 3000);
          break;
        case 403:
          errorResponse = {
            error: errorMessage || "You don't have permission to access this resource.",
            status: 'Access Denied',
          };
          break;
        case 404:
          errorResponse = {
            error: errorMessage || 'The requested resource was not found.',
            status: 'Not Found',
          };
          break;
        case 422:
          errorResponse = {
            error: errorMessage || 'Validation error. Please check your input.',
            status: 'Validation Error',
          };
          break;
        case 500:
        case 502:
        case 503:
        case 504:
          errorResponse = {
            error: errorMessage || 'Server error. Please try again later.',
            status: 'Server Error',
          };
          break;
        default:
          errorResponse = {
            error: errorMessage || `An error occurred while processing your request.`,
            status: 'Request Failed',
          };
      }
    } else if (axiosError.request) {
      // The request was made but no response was received
      errorResponse = {
        error: 'Network error. Please check your internet connection and try again.',
        status: 'Connection Error',
      };
    } else {
      // Something happened in setting up the request
      errorResponse = {
        error: axiosError.message || 'Failed to send request.',
        status: 'Request Error',
      };
    }
  } else if (error instanceof Error) {
    // Handle standard JS errors
    errorResponse = {
      error: error.message || 'An error occurred.',
      status: 'Application Error',
    };
  }

  if (type === 'toast' || type === 'modal') {
    showNotification({
      message: errorResponse.error,
      title: errorResponse.status,
      color: 'yellow',
      position: 'top-center',
      icon: <InfoCircle size={32} variant="Outline" color="white" />,
      autoClose: 3000,
    });
  }

  return errorResponse;
};
