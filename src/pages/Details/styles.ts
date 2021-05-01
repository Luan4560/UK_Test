import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background: #7fdeff;
  width: 100%;
  height: 70px;
`;

export const HeaderContent = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const ContentDetails = styled.View`
  margin-top: 20px;
  height: 100%;
  align-items: center;
`;

export const ContentImage = styled.View`
  width: 250px;
  height: 400px;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 50px;
`;

export const Description = styled.Text`
  text-align: center;
  width: 300px;
  height: 100%;
  font-size: 16px;
`;
