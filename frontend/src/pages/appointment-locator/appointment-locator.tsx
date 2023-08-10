import { AppointmentLocatorComponent, PageRightContainer } from '@components/index';

const AppointmentsWithLocatorPage: React.FC = () => {
  return (
    <PageRightContainer title={'Appointment Information'} child={<AppointmentLocatorComponent />} />
  );
};

export default AppointmentsWithLocatorPage;
