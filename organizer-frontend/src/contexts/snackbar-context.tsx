import { Alert, AlertColor, Snackbar } from '@mui/material';
import { createContext, useCallback, useState } from 'react';
import { SNACKBAR_SEVERITIES } from '../consts';

const SNACKBAR_DURATION = 1000; //2seconds

interface SnackbarContextData {
  showSnackbar: (message: string, severity?: AlertColor) => void;
}

export const SnackbarContext = createContext<SnackbarContextData>({} as SnackbarContextData);

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>(SNACKBAR_SEVERITIES.SUCCESS);

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setSeverity(SNACKBAR_SEVERITIES.SUCCESS);
  };

  const showSnackbar = useCallback((message: string, severity: AlertColor = SNACKBAR_SEVERITIES.SUCCESS) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={SNACKBAR_DURATION}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
