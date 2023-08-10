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
    width: '70%'
  }
});

export const NoSearchState = styled('div')({
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ['& .no-search-icon']: {
    marginTop: '50px',
    height: '80px'
  }
});
export const UserDataContainer = styled('div')({
  ['& .user-data']: {
    marginTop: '70px'
  },
  ['& .appointment-table']: {
    marginTop: '70px'
  }
});
