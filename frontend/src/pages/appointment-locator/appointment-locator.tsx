import { AppointmentLocatorComponent, PageRightContainer } from '@components/index';

const AppointmentsWithLocatorPage: React.FC = () => {
  return (
    <PageRightContainer
      title={'Appointments with Locator'}
      child={<AppointmentLocatorComponent />}
    />
  );
};

export default AppointmentsWithLocatorPage;
