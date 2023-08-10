import { AllAppointmentsComponent, PageRightContainer } from '@components/index';

const AllAppointmentsPage: React.FC = () => {
  return <PageRightContainer title={'List Appointments'} child={<AllAppointmentsComponent />} />;
};

export default AllAppointmentsPage;
