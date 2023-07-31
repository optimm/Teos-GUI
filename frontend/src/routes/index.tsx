import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';

const HomeRoutes: React.FC = () => {
  return <Routes></Routes>;
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
