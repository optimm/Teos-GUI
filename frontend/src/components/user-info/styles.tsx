import styled from '@emotion/styled';
export const UserInfoContainer = styled('div')({
  width: '100%',
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
});

export const SearchSection = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  ['& .search-input']: {
    width: '75%'
  }
});

export const NoSearchState = styled('div')({
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
export const UserDataContainer = styled('div')({
  ['& .user-data']: {
    marginTop: '50px'
  },
  ['& .appointment-table']: {
    marginTop: '50px'
  }
});
