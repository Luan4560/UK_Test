import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Search} from '../../components/Search';
import api from '../../services/api';
import {Container, ImageCape, ImageContainer, Title, ContentCape} from './styles';

interface DataTypes {
  show: {
    id: string;
    name: string;
    image: {
      medium: string;
    };
  }
}

export const Home = () => {
  const navigation = useNavigation();

  const [show, setShow] = useState<DataTypes[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/dragon');

        setShow(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const _renderItem = ({item}: any) => {
    return (
      <ScrollView>
        <ContentCape onPress={() => navigation.navigate('Details')}>
          <ImageContainer key={item.show.id}>
            <ImageCape source={{uri: item.show.image.medium}} />
            <Title>{item.show.name}</Title>
          </ImageContainer>
        </ContentCape>
      </ScrollView>
    )
  }

  return (
    <Container>
      <Search/>
      <FlatList
        data={show}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.show.id}
        numColumns={2}
      />
    </Container>
  );
};


