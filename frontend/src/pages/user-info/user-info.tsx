import { PageRightContainer, UserInfoComponent } from '@components/index';

const UserInfo: React.FC = () => {
  return <PageRightContainer title={'User Information'} child={<UserInfoComponent />} />;
};

export default UserInfo;
