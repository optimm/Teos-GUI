import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)((theme) => ({
  background: '#0096ff',
  padding: '2px 20px',
  fontWeight: '600',
  fontFamily: 'montserrat',
  ['&:disabled']: {
    backgroundColor: '#82c9fa',
    color: 'white'
  }
}));
