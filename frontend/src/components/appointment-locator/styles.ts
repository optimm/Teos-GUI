import styled from '@emotion/styled';

export const AppointmentLocatorContainer = styled('div')({
  width: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',

  ['& .appointments-table']: {
    marginTop: '50px'
  }
});
