import { useEffect, useState } from 'react';
import {
  CardError,
  CopyTextComponent,
  DataTable,
  DataTableData,
  PageCardLoader,
  StyledButton,
  StyledModal
} from '..';
import { AllAppointmentsContainer, AppointmentModal, DataSingle } from './styles';
import { Appointment } from '@common/dto';
import { ApiUtil } from '@common/utils';
import { ApiService } from '@common/service/api.service';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

const AllAppointmentsComponent: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const handleViewAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

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
            <>
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
                      <>
                        <div className='data-table-row' key={index}>
                          <div className='data-table-serial-no'>{index + 1}</div>
                          <div className='data-table-column'>
                            <div className='data-table-text'>{item.locator}</div>
                          </div>
                          <StyledButton
                            variant='contained'
                            onClick={() => handleViewAppointment(item)}
                          >
                            View
                          </StyledButton>
                        </div>
                      </>
                    ))}
                  </DataTableData>
                </DataTable>
              </AllAppointmentsContainer>
              <StyledModal open={modalOpen} onClose={() => setModalOpen(false)}>
                <AppointmentModal>
                  <div className='modal-title'>Appointment Data</div>
                  <div className='modal-content'>
                    <DataSingle>
                      <div className='data-head'>Locator</div>
                      <div className='data-content'>
                        <div className='data-content-text'>{selectedAppointment?.locator}</div>
                        <CopyTextComponent text={selectedAppointment?.locator} />
                      </div>
                    </DataSingle>
                    <DataSingle>
                      <div className='data-head'>Encrypted Blob</div>
                      <div className='data-content'>
                        <div className='data-content-text'>
                          {selectedAppointment?.encrypted_blob}
                        </div>
                        <CopyTextComponent text={selectedAppointment?.encrypted_blob} />
                      </div>
                    </DataSingle>
                    <DataSingle>
                      <div className='data-head'>To Self Delay</div>
                      <div className='data-content'>
                        <div className='data-content-text'>
                          {selectedAppointment?.to_self_delay}
                        </div>
                      </div>
                    </DataSingle>
                  </div>
                </AppointmentModal>
              </StyledModal>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AllAppointmentsComponent;
