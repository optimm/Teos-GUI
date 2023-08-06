import { AllUsersComponent, PageRightContainer } from '@components/index';

const AllUsers: React.FC = () => {
  return <PageRightContainer title={'All Users'} child={<AllUsersComponent />} />;
};

export default AllUsers;
