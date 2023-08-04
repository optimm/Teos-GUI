import { HomeComponent, PageRightContainer } from '@components/index';

const HomePage: React.FC = () => {
  return <PageRightContainer title={'Hello Admin'} child={<HomeComponent />} />;
};

export default HomePage;
