import Home from '@pages/home/home';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { RoutesContainer } from './styles';
import SideBar from '@components/sidebar/side-bar';

const HomeRoutes: React.FC = () => {
  return (
    <>
      <RoutesContainer>
        <SideBar />
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>
      </RoutesContainer>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoutes />
  }
]);

const AllRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AllRoutes;
