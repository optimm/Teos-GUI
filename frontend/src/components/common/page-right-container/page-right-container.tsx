import { ReactNode } from 'react';
import { Container, PageCard, PageTitle, PageTitleContainer } from './styles';
import { DarkModeSwitch } from '../switch';
import useAppStore from 'service/app.slice';

interface PageRightContainerProps {
  child: ReactNode;
  title: string;
}

const PageRightContainer: React.FC<PageRightContainerProps> = ({ child, title }) => {
  const { toggleDarkMode } = useAppStore();
  return (
    <Container>
      <PageTitleContainer>
        <PageTitle>{title}</PageTitle>
        <DarkModeSwitch sx={{ m: 1 }} onChange={toggleDarkMode} />
      </PageTitleContainer>

      <PageCard>{child}</PageCard>
    </Container>
  );
};

export default PageRightContainer;
