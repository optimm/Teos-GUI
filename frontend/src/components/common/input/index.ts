import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextInput = styled(TextField)(({ theme }) => ({
  ['& .MuiInputBase-input']: {
    padding: '12px'
  },
  ['& .MuiFilledInput-root']: {
    background: theme.palette.background.default
  }
}));
