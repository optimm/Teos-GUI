import styled from '@emotion/styled';

export const Container = styled('div')({
  flex: '1',
  height: '100vh',
  overflowY: 'hidden',
  padding: '50px 6%'
});

export const PageTitle = styled('div')({
  fontSize: '26px',
  marginTop: '25px',
  fontWeight: '700'
});

export const PageCard = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  marginTop: '40px',
  padding: '40px',
  width: '100%',
  minHeight: '60vh',
  maxHeight: 'calc(100vh - 200px)',
  overflowY: 'auto',
  overflowX: 'hidden',
  filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
  borderRadius: '10px'
}));
