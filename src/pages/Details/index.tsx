import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import {Container, Header, HeaderContent, TitleHeader, ContentDetails, ContentImage, Thumb, Title} from './styles'

export const Details = () => {
  return (
    <Container>
      <Header>
        <HeaderContent onPress={() => {}}>
          <Icon name="chevron-left" color="#fff" size={35} />
          <TitleHeader>Batman</TitleHeader>
        </HeaderContent>
      </Header>

        <ContentDetails>
          <ContentImage>
            <Thumb source={{uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg' }}/>
          </ContentImage>
          <Title>BATMAN</Title>
        </ContentDetails>
    </Container>
  )
}
