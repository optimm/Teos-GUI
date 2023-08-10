import styled from '@emotion/styled';

export const CardErrorContainer = styled('div')(({ theme }) => ({
  width: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',

  ['& .card-error-icon']: {
    height: '70px'
  },
  ['& .card-error-text']: {
    color: theme.palette.error.main,
    fontSize: '18px'
  }
}));
