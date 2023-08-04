import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutesContainer } from './styles';
import { AllUsersPage, HomePage, TowerInfoPage, UserInfoPage } from '@pages/index';
import { SideBar } from '@components/index';

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesContainer>
          <SideBar />
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='tower-info' element={<TowerInfoPage />} />
            <Route path='all-users' element={<AllUsersPage />} />
            <Route path='user-info' element={<UserInfoPage />} />
          </Routes>
        </RoutesContainer>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
