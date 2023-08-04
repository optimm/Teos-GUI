import { ReactNode } from 'react';
import { Container, PageCard, PageTitle } from './styles';

interface PageRightContainerProps {
  child: ReactNode;
  title: string;
}

const PageRightContainer: React.FC<PageRightContainerProps> = ({ child, title }) => {
  return (
    <Container>
      <PageTitle>{title}</PageTitle>
      <PageCard>{child}</PageCard>
    </Container>
  );
};

export default PageRightContainer;
