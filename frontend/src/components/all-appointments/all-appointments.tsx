import { useEffect, useState } from 'react';
import { AppointmentTable, CardError, PageCardLoader } from '..';

import { Appointment } from '@common/dto';
import { ApiUtil } from '@common/utils';
import { ApiService } from '@common/service/api.service';

const AllAppointmentsComponent: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAppointments() {
      try {
        const { data } = await ApiService.getAllAppointments();
        setAppointments(data.appointments);
      } catch (error) {
        const errorMessage = ApiUtil.getErrorMsg(error);
        setError(errorMessage);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    getAppointments();
  }, []);

  return (
    <>
      {loading ? (
        <PageCardLoader />
      ) : (
        <>
          {error ? <CardError error={error} /> : <AppointmentTable appointments={appointments} />}
        </>
      )}
    </>
  );
};

export default AllAppointmentsComponent;
