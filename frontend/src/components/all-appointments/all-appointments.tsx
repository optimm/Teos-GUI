import { useEffect, useState } from 'react';
import { CardError, DataTable, DataTableData, PageCardLoader } from '..';
import { AllAppointmentsContainer } from './styles';
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
          {error ? (
            <CardError error={error} />
          ) : (
            <AllAppointmentsContainer>
              <DataTable>
                <div className='data-table-title'>Appointments</div>
                <div className='data-table-divider' />
                <DataTableData columns={1}>
                  <div className='data-table-row'>
                    <div className='data-table-serial-no'>
                      <div className='data-table-column-head'>Sr No.</div>
                    </div>
                    <div className='data-table-column'>
                      <div className='data-table-column-head'>Locator</div>
                    </div>
                  </div>
                  {appointments?.map((item, index) => (
                    <div className='data-table-row' key={index}>
                      <div className='data-table-serial-no'>{index + 1}</div>
                      <div className='data-table-column'>
                        <div className='data-table-text'>{item.locator}</div>
                      </div>
                    </div>
                  ))}
                </DataTableData>
              </DataTable>
            </AllAppointmentsContainer>
          )}
        </>
      )}
    </>
  );
};

export default AllAppointmentsComponent;
