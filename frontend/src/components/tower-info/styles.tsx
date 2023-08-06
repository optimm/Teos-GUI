import styled from '@emotion/styled';

export const TowerInfoContainer = styled('div')({
  width: '100%'
});

export const ItemSingle = styled('div')({
  width: '100%',
  display: 'flex',
  gap: '2%',
  marginBottom: '30px',
  fontSize: '14px',

  ['& .item-title']: {
    width: '23%',
    fontWeight: '500'
  },
  ['& .item-right']: {
    width: '75%',
    display: 'flex',
    gap: '10px'
  },
  ['& .item-value']: {
    width: '95%',
    wordBreak: 'break-word'
  }
});

export const AddressTable = styled('div')({
  marginTop: '50px'
});
