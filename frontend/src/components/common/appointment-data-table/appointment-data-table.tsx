import { Appointment } from '@common/dto';
import { DataTable, DataTableData } from '../data-table';
import { AllAppointmentsContainer, AppointmentModal, DataSingle } from './styles';
import { StyledButton } from '../button';
import { useState } from 'react';
import { StyledModal } from '../modal';
import CopyTextComponent from '../copy-text/copy-text';
import CardError from '../card-error/card-error';

interface AppointmentTable {
  appointments: Appointment[] | null;
}
const AppointmentTable: React.FC<AppointmentTable> = ({ appointments = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const handleViewAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

  if (!appointments) {
    return <CardError error={'Something went wrong'} />;
  }

  return (
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
                  <StyledButton variant='contained' onClick={() => handleViewAppointment(item)}>
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
                <div className='data-content-text'>{selectedAppointment?.encrypted_blob}</div>
                <CopyTextComponent text={selectedAppointment?.encrypted_blob} />
              </div>
            </DataSingle>
            <DataSingle>
              <div className='data-head'>To Self Delay</div>
              <div className='data-content'>
                <div className='data-content-text'>{selectedAppointment?.to_self_delay}</div>
              </div>
            </DataSingle>
          </div>
        </AppointmentModal>
      </StyledModal>
    </>
  );
};

export default AppointmentTable;
