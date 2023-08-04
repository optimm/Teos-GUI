import * as copy from 'copy-to-clipboard';
import { CopyTextContainer } from './styles';
import Icons from '@assets/icons';
import { useSnackbar } from 'notistack';
interface CopyTextComponentProps {
  text: string | undefined;
}
const CopyTextComponent: React.FC<CopyTextComponentProps> = ({ text = '' }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopy = () => {
    copy(text);
    enqueueSnackbar('Copied to clipboard', { variant: 'info' });
  };
  return (
    <CopyTextContainer onClick={handleCopy}>
      <img alt='copy icon' src={Icons.CopyIcon} className='copy-icon' />
    </CopyTextContainer>
  );
};

export default CopyTextComponent;
