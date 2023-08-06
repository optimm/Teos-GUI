import { AllAppointmentsComponent, PageRightContainer } from '@components/index';

const AllAppointmentsPage: React.FC = () => {
  return <PageRightContainer title={'All Appointments'} child={<AllAppointmentsComponent />} />;
};

export default AllAppointmentsPage;
