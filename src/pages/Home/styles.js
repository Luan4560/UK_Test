import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  background: #7fdeff;
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

export const IconBackground = styled.TouchableOpacity`
  background: #222;
  width: 40px;
  height: 40px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  width: 150px;
  align-items: center;
  justify-content: center;
  height: 250px;
  padding: 20px 0;
`;

export const ImageCape = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContentCape = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
