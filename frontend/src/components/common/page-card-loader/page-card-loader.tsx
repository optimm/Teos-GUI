import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './styles';

const PageCardLoader: React.FC = () => {
  return (
    <LoaderContainer>
      <BallTriangle radius={5} ariaLabel='ball-triangle-loading' visible={true} color='#0096ff' />
    </LoaderContainer>
  );
};

export default PageCardLoader;
