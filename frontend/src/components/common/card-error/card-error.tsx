import Icons from '@assets/icons';
import { CardErrorContainer } from './styles';

interface CardErrorProps {
  error: string;
}
const CardError: React.FC<CardErrorProps> = ({ error = 'Something went wrong' }) => {
  return (
    <CardErrorContainer>
      <img className='card-error-icon' src={Icons.ErrorIcon} alt='error icon' />
      <div className='card-error-text'>{error}</div>
    </CardErrorContainer>
  );
};

export default CardError;
