import styled from '@emotion/styled';

export const HomeComponentContainer = styled('div')(({ theme }) => ({
  width: '80%',
  flex: '1',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',

  ['& .home-page-title']: {
    fontSize: '40px',
    fontWeight: '700',
    marginTop: '10vh'
  },
  ['& .home-page-text']: {
    fontSize: '18px',
    lineHeight: '1.6'
  },
  ['& .styled-text']: {
    padding: '2px 4px',
    fontWeight: '500',
    background: theme.palette.background.default
  }
}));
