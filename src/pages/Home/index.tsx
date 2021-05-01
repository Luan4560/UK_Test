import React, {useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import {Spinner} from '../../components/Spinner';
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
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState<DataTypes[]>([]);

  const onChange = async (query: any) => {
    try {
      setIsLoading(true);
      const response = await api.get(`search/shows/?q=${query}`);
      const results = response.data;

      setShow(results);
    } catch (error) {
      setShow([]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Spinner />
      </View>
    );
  }

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
            <Title>{item.show.name}</Title>
          </ImageContainer>
        </ContentCape>
      </ScrollView>
    );
  };

  return (
    <Container>
      <Header>
        <ContentInput>
          <Input
            onChangeText={queryText => onChange(queryText)}
            placeholder="Type..."
          />
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
