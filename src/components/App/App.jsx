import React from 'react';
import styled from 'styled-components';
import Problem from '../Problem';

const Container = styled.div`padding: 1em;`;
const Title = styled.h1`text-align: center;`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 900px;
  margin-top: 6em;
`;

const App = () => (
  <Container>
    <div>
      <Title>Math Game</Title>
    </div>
    <ContentContainer>
      <Content>
        <p>Resolve the operation:</p>
        <div className="nes-container with-title">
          <div className="title">Resolved: 0</div>
          <Problem />
        </div>
      </Content>
    </ContentContainer>
  </Container>
);

export default App;
