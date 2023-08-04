import { TowerInfoRepo } from '@modules/tower-info/tower-info.repo';
import { useEffect, useState } from 'react';
import { ItemSingle, TowerInfoContainer } from './styles';
import { TowerInfoDto } from '@modules/tower-info/dto/tower-info.dto';
import { CopyTextComponent } from '..';

const TowerInfoComponent: React.FC = () => {
  const [towerInfo, setTowerInfo] = useState<TowerInfoDto | null>(null);
  useEffect(() => {
    async function getInfo() {
      try {
        const { data } = await TowerInfoRepo.getTowerInfo();
        setTowerInfo(data.towerInfo);
      } catch (error) {}
    }
    getInfo();
  }, []);

  return (
    <TowerInfoContainer>
      <ItemSingle>
        <div className='item-title'>Tower Id</div>
        <div className='item-right'>
          <div className='item-value'>{towerInfo?.tower_id}</div>
          <CopyTextComponent text={towerInfo?.tower_id} />
        </div>
      </ItemSingle>
      <ItemSingle>
        <div className='item-title'>Registered Users</div>
        <div className='item-right'>
          <div className='item-value'>{towerInfo?.n_registered_users}</div>
        </div>
      </ItemSingle>
      <ItemSingle>
        <div className='item-title'>Watcher Appointments</div>
        <div className='item-right'>
          <div className='item-value'>{towerInfo?.n_watcher_appointments}</div>
        </div>
      </ItemSingle>
      <ItemSingle>
        <div className='item-title'>Responder Trackers</div>
        <div className='item-right'>
          <div className='item-value'>{towerInfo?.n_responder_trackers}</div>
        </div>
      </ItemSingle>
      <ItemSingle>
        <div className='item-title'>Bitcoind Reachable</div>
        <div className='item-right'>
          <div className='item-value'>{towerInfo?.bitcoind_reachable.toString()}</div>
        </div>
      </ItemSingle>
    </TowerInfoContainer>
  );
};

export default TowerInfoComponent;
