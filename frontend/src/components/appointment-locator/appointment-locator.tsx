import { Appointment } from '@common/dto';
import { ApiUtil } from '@common/utils';
import { useState } from 'react';
import { AppointmentTable, CardError, PageCardLoader, StyledButton, StyledTextInput } from '..';
import { AppointmentLocatorContainer } from './styles';
import { NoSearchState, SearchSection } from '@components/user-info/styles';
import Icons from '@assets/icons';
import { ApiService } from '@common/service/api.service';

const AppointmentLocatorComponent = () => {
  const [locator, setLocator] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[] | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetAppointments = async () => {
    setError(null);
    setAppointments(null);
    setLoading(true);

    try {
      const { data } = await ApiService.getAppointmentsLocator(locator!);
      setAppointments(data.appointments);
    } catch (error) {
      const errorMessage = ApiUtil.getErrorMsg(error);
      setError(errorMessage);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <AppointmentLocatorContainer>
      <SearchSection>
        <div className='search-input'>
          <StyledTextInput
            variant='filled'
            fullWidth
            placeholder='Enter the locator'
            value={locator}
            onChange={(e) => setLocator(e.target.value)}
          />
        </div>
        <StyledButton
          variant='contained'
          disabled={loading || !locator || locator?.trim() == ''}
          onClick={handleGetAppointments}
        >
          Get Appointments
        </StyledButton>
      </SearchSection>
      {loading ? (
        <PageCardLoader />
      ) : (
        <>
          {error ? (
            <CardError error={error} />
          ) : (
            <>
              {appointments ? (
                <div className='appointments-table'>
                  <AppointmentTable appointments={appointments} />
                </div>
              ) : (
                <NoSearchState>
                  <img src={Icons.AppointmentIcon} alt='user icon' className='no-search-icon' />
                </NoSearchState>
              )}
            </>
          )}
        </>
      )}
    </AppointmentLocatorContainer>
  );
};

export default AppointmentLocatorComponent;
