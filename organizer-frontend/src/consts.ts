import { AlertColor } from "@mui/material";
import { QueryKey } from "@tanstack/react-query";

export type QueryKeyValues = typeof QUERY_KEYS[keyof typeof QUERY_KEYS];
export const QUERY_KEYS: Record<string, QueryKey> = {
  TASKS: ['tasks'],
}

export const API_ROUTES = {
  TASKS: '/tasks'
}

export const SNACKBAR_SEVERITIES: Record<string, AlertColor> = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}