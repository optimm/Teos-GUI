import Home from '@pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutesContainer } from './styles';
import SideBar from '@components/sidebar/side-bar';
import TowerInfo from '@pages/tower-info/tower-info';
import AllUsers from '@pages/all-users/all-users';
import UserInfo from '@pages/user-info/user-info';

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesContainer>
          <SideBar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='tower-info' element={<TowerInfo />} />
            <Route path='all-users' element={<AllUsers />} />
            <Route path='user-info' element={<UserInfo />} />
          </Routes>
        </RoutesContainer>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
