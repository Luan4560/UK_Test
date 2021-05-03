import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';

import {Spinner} from '../../components/Spinner';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  TitleHeader,
  ContentDetails,
  ContentImage,
  Thumb,
  Title,
  Description,
} from './styles';
import {useSelector} from 'react-redux';

export const Details = ({route}) => {
  const {itemId} = route.params;
  const [details, setDetails] = useState([]);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`shows/${itemId}`);

        const regex = /(<([^>]+)>)/gi;
        const result = response.data.summary.replace(regex, '');

        setSummary(result);
        setDetails(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getDetails();
  }, [itemId]);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Spinner />
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderContent onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="#fff" size={35} />
          <TitleHeader>{details.name || ''}</TitleHeader>
        </HeaderContent>
      </Header>

      <ContentDetails>
        <ContentImage>
          <Thumb
            source={{
              uri: details.image ? details.image.medium : 'no content',
            }}
          />
        </ContentImage>

        <Title>{details.name}</Title>
        <View style={{height: 150}}>
          <ScrollView style={{flexGrow: 0.8}}>
            <Description>{summary}</Description>
          </ScrollView>
        </View>
      </ContentDetails>
    </Container>
  );
};
