import { TowerInfoRepo } from '@modules/tower-info/tower-info.repo';
import { useEffect } from 'react';

const TowerInfoComponent: React.FC = () => {
  useEffect(() => {
    try {
      const data = TowerInfoRepo.getTowerInfo();
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return <div>TowerInfoComponent</div>;
};

export default TowerInfoComponent;
