import { HomeComponentContainer } from './styles';

const HomeComponent: React.FC = () => {
  return (
    <HomeComponentContainer>
      <div className='home-page-title'>Welcome to teosd gui</div>
      <div className='home-page-text'>
        Welcome to our gui, powered by <span className='styled-text'>teos-cli</span>. Experience the
        full potential of <span className='styled-text'>teos-cli</span> with a visually intuitive
        interface. Simplify your workflow and unleash the power of graphical interaction.
      </div>
    </HomeComponentContainer>
  );
};

export default HomeComponent;
