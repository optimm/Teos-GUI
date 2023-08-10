import styled from '@emotion/styled';

export const SideBarContainer = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  height: '100%',
  borderRight: '2px solid',
  borderColor: theme.palette.divider,
  padding: '50px 30px'
}));

export const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  alignItems: 'flex-end',
  // image of the logo
  ['& .logo-image']: {
    height: '55px',
    width: 'auto'
  },
  // text of the logo
  ['& .logo-text']: {
    fontSize: '22px',
    fontWeight: '700',
    color: theme.palette.text.primary
  }
}));

export const MainMenuContainer = styled('div')(({ theme }) => ({
  marginTop: '50px',

  ['& .menu-title']: {
    fontSize: '15px',
    fontWeight: '500',
    marginLeft: '10px',
    color: theme.palette.text.disabled
  },
  ['& .menu-list']: {
    marginTop: '30px'
  },
  ['& .active-item']: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}));

export const MenuItem = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '15px 20px',
  marginTop: '15px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '3px',
  gap: '10px',
  color: theme.palette.text.secondary,
  fontSize: '14px',
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  // image of the logo
  ['& .menu-item-icon']: {
    height: '14px',
    width: 'auto'
  },
  // text of the logo
  ['& .menu-item-text']: {
    fontWeight: '700'
  },

  //hover effect
  '&:hover': {
    background: theme.palette.background.default,
    color: theme.palette.text.primary
  }
}));
