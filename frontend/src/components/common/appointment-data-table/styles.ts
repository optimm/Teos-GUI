import styled from '@emotion/styled';

export const AllAppointmentsContainer = styled('div')({
  width: '100%'
});

export const AppointmentModal = styled('div')({
  width: '600px',
  padding: '20px',

  ['& .modal-title']: {
    fontSize: '22px',
    fontWeight: '600'
  },
  ['& .modal-content']: {
    marginTop: '30px'
  }
});

export const DataSingle = styled('div')({
  width: '100%',
  marginTop: '20px',

  ['& .data-head']: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '15px'
  },

  ['& .data-content']: {
    width: '100%',
    display: 'flex',
    gap: '10px'
  },

  ['& .data-content-text']: {
    width: '95%',
    wordBreak: 'break-word',
    fontSize: '15px'
  }
});
