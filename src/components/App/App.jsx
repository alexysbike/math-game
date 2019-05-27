import React from 'react';
import styled from 'styled-components';
import ProblemPanel from '../ProblemPanel';

const Container = styled.div`padding: 1em;`;
const TitleContainer = styled.div`padding: 2em;`;
const Title = styled.h1`text-align: center;`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 100%;
  margin-top: 3.5em;
`;
const Label = styled.p`text-align: center;`;

const App = () => (
  <Container>
    <TitleContainer>
      <Title>Math Game</Title>
    </TitleContainer>
    <ContentContainer>
      <Content>
        <Label>Resolve the operation</Label>
        <ProblemPanel />
      </Content>
    </ContentContainer>
  </Container>
);

export default App;
