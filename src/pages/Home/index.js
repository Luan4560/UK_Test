import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import {Container, Input, IconBackground, ContentInput, Header} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoRequest} from '../../store/modules/actions';
import ItemsShow from './components/ItemsShow';

export const Home = () => {
  const {list} = useSelector(state => state.list);
  const dispatch = useDispatch();

  const handleSearch = text => {
    dispatch(getInfoRequest({search: text}));
  };

  return (
    <Container>
      <Header>
        <ContentInput>
          <Input
            onChangeText={text => handleSearch(text)}
            placeholder="Type..."
          />

          <IconBackground>
            <Icon name="search" color="#fff" size={20} />
          </IconBackground>
        </ContentInput>
      </Header>

      <FlatList
        data={list}
        renderItem={({item}) => <ItemsShow item={item} />}
        keyExtractor={item => item.show.id}
        numColumns={2}
      />
    </Container>
  );
};
