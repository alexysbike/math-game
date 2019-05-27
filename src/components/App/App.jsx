import React from 'react';
import styled from 'styled-components';
import ProblemPanel from '../ProblemPanel';
import { useTranslation } from '../../services/translation';

const Container = styled.div`padding: 1em;`;
const TitleContainer = styled.div`padding: 2em;`;
const Title = styled.h2`text-align: center;`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  margin-top: 1.5em;
`;
const Label = styled.p`text-align: center; font-size: 1em;`;

const App = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <TitleContainer>
        <Title>Math Game</Title>
      </TitleContainer>
      <ContentContainer>
        <Content>
          <Label>{t('Resolve the operation')}</Label>
          <ProblemPanel />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default App;
