import { styled } from '@mui/material';

interface DataTableProps {
  columns: number;
}
export const DataTable = styled('div')(({ theme }) => ({
  width: '100%',

  ['& .data-table-title']: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '30px'
  },

  ['& .data-table-divider']: {
    height: '1px',
    width: '100%',
    background: theme.palette.divider
  }
}));

export const DataTableData = styled('div')<DataTableProps>(({ columns, theme }) => {
  const columnWidth = `${100 / columns - 1}%`;

  return {
    width: '100%',

    ['& .data-table-row']: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 10px',
      borderBottom: `1px solid ${theme.palette.divider}`
    },

    ['& .data-table-column']: {
      width: `${columnWidth}`,
      display: 'flex',
      justifyContent: 'space-between'
    },

    ['& .data-table-serial-no']: {
      width: '90px'
    },

    ['& .data-table-column-head']: {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: '600'
    },

    ['& .data-table-text']: {
      fontSize: '14px'
    }
  };
});
