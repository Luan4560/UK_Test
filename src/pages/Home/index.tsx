/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  ImageCape,
  ImageContainer,
  Title,
  ContentCape,
  Input,
  IconBackground,
  ContentInput,
  Header,
} from './styles';
import {searchShow} from '../../store/modules/list/actions';
import {IListItem} from '../../store/modules/list/types';

interface DataTypes {
  show: {
    id: string;
    name: string;
    image: {
      medium: string;
    };
  };
}

export const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState<DataTypes[]>([]);
  const navigation = useNavigation();

  const state = useSelector(state => state);

  const onChange = async (show: any) => {
    dispatch(searchShow(show));

    try {
      setIsLoading(true);
      const response = await api.get(`search/shows/?q=${show}`);
      const results = response.data;

      setShow(results);
    } catch (error) {
      setShow([]);
    } finally {
      setIsLoading(false);
    }
  };

  const _renderItem = ({item}: any) => {
    return (
      <ScrollView>
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
      </ScrollView>
    );
  };

  return (
    <Container>
      <Header>
        <ContentInput>
          <Input onChangeText={show => onChange(show)} placeholder="Type..." />
          <IconBackground>
            <Icon name="search" color="#fff" size={20} />
          </IconBackground>
        </ContentInput>
      </Header>

      <FlatList
        data={show}
        renderItem={_renderItem}
        keyExtractor={item => item.show.id}
        numColumns={2}
      />
    </Container>
  );
};
