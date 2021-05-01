import styled from 'styled-components/native';

export const Container = styled.View`
  background: #7fdeff;
  width: 100%;
  height: 70px;
`;

export const ContentInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 95%;
  height: 50px;
  margin: 0 auto;
  padding: 0 15px;

  border-radius: 50px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 10px 10px 10px 0;
  background: #fff;
`;

export const IconBackground = styled.View`
  background: #222;
  width: 40px;
  height: 40px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;
