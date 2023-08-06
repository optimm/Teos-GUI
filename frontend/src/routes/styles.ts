import styled from '@emotion/styled';

export const RoutesContainer = styled('div')(({ theme }) => ({
  height: '100vh',
  maxHeight: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  overflow: 'hidden',
  display: 'flex',
  background: theme.palette.background.default
}));
