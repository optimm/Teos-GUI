import { PageRightContainer, TowerInfoComponent } from '@components/index';

const TowerInfo: React.FC = () => {
  return <PageRightContainer title={'Tower Information'} child={<TowerInfoComponent />} />;
};

export default TowerInfo;
