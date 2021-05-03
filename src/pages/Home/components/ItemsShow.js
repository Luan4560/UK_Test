import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ImageCape, ImageContainer, Title, ContentCape} from '../styles';
const ItemsShow = ({item}) => {
  const navigation = useNavigation();
  return (
    <ContentCape
      onPress={() =>
        navigation.navigate('Details', {
          itemId: item.show.id,
        })
      }>
      <ImageContainer key={item.show.id}>
        <ImageCape
          source={{
            uri: item.show.image ? item.show.image.medium : 'no content',
          }}
        />
        <Title>{item.show.name || ''}</Title>
      </ImageContainer>
    </ContentCape>
  );
};

export default ItemsShow;
