import { AllUsersComponent, PageRightContainer } from '@components/index';

const AllUsers: React.FC = () => {
  return <PageRightContainer title={'List Users'} child={<AllUsersComponent />} />;
};

export default AllUsers;
