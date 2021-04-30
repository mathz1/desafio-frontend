import styled from 'styled-components';

export const DivContainer = styled.div`
  height: 100vh;
  display: flex;
  place-items: center;
`;

export const CenteredContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 24px;
  border: 1px solid #dadce0;
  border-radius: 20px;
  background-color: #fff;
  width: calc(100vw - 64px);
  max-width: 500px;

  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: grid;
  gap: 32px;
`;

export const Header = styled.head`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;