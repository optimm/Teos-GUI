import { useEffect, useState } from 'react';
import { LogoContainer, MainMenuContainer, MenuItem, SideBarContainer } from './styles';
import MainLogo from '@assets/logos/main-logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideBarUtils } from './utils/side-bar-utils';

const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current URL and determine the active tab
    const currentUrl = location.pathname;
    const activeTab = SideBarUtils.getActiveTabFromUrl(currentUrl);
    setActiveItem(activeTab);
  }, [location.pathname]);

  const handleSideBarClick = (active: number) => {
    const navigationUrl = SideBarUtils.getUrlFromActiveTab(active);
    setActiveItem(active);
    navigate(navigationUrl);
  };

  return (
    <SideBarContainer>
      <LogoContainer>
        <img className='logo-image' src={MainLogo} alt='Eye of satoshi' />
        <div className='logo-text'>Eye of Satoshi</div>
      </LogoContainer>
      <MainMenuContainer>
        <div className='menu-title'>MAIN MENU</div>
        <div className='menu-list'>
          <MenuItem
            className={activeItem === 0 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(0)}
          >
            <div className='menu-item-text'>Home</div>
          </MenuItem>
          <MenuItem
            className={activeItem === 1 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(1)}
          >
            <div className='menu-item-text'>Tower information</div>
          </MenuItem>
          <MenuItem
            className={activeItem === 2 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(2)}
          >
            <div className='menu-item-text'>List users</div>
          </MenuItem>
          <MenuItem
            className={activeItem === 3 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(3)}
          >
            <div className='menu-item-text'>User information</div>
          </MenuItem>
          <MenuItem
            className={activeItem === 4 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(4)}
          >
            <div className='menu-item-text'>List appointments</div>
          </MenuItem>
          <MenuItem
            className={activeItem === 5 ? 'active-item' : ''}
            onClick={() => handleSideBarClick(5)}
          >
            <div className='menu-item-text'>Appointment information</div>
          </MenuItem>
        </div>
      </MainMenuContainer>
    </SideBarContainer>
  );
};

export default SideBar;
