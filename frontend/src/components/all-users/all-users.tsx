import { useEffect, useState } from 'react';
import { CardError, CopyTextComponent, DataTable, DataTableData, PageCardLoader } from '..';
import { AllUsersContainer, UserIdsTable } from './styles';
import { ApiService } from '@common/service/api.service';
import { ApiUtil } from '@common/utils';

const AllUsersComponent: React.FC = () => {
  const [userIds, setUserIds] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getInfo() {
      try {
        const { data } = await ApiService.getAllUsers();

        if (data.user_ids && data.user_ids.length > 0) {
          setUserIds(data.user_ids);
        } else {
          setError('No user found');
        }
      } catch (error) {
        const errorMessage = ApiUtil.getErrorMsg(error);
        setError(errorMessage);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    getInfo();
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
            <AllUsersContainer>
              <UserIdsTable>
                <DataTable>
                  <div className='data-table-title'>User IDs</div>
                  <div className='data-table-divider' />
                  <DataTableData columns={1}>
                    <div className='data-table-row'>
                      <div className='data-table-column'>
                        <div className='data-table-column-head'>ID</div>
                      </div>
                    </div>
                    {userIds?.map((item, index) => (
                      <div className='data-table-row' key={index}>
                        <div className='data-table-column'>
                          <div className='data-table-text'>{item}</div>
                          <CopyTextComponent text={item} />
                        </div>
                      </div>
                    ))}
                  </DataTableData>
                </DataTable>
              </UserIdsTable>
            </AllUsersContainer>
          )}
        </>
      )}
    </>
  );
};

export default AllUsersComponent;
