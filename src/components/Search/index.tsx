import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import {Container, Input, IconBackground, ContentInput} from './styles';

export const Search = () => {
  return (
    <Container>
      <ContentInput>
        <Input>
          <Text>Batman</Text>
        </Input>
        <TouchableOpacity onPress={() => {}}>
          <IconBackground>
            <Icon name="search" color="#fff" size={20} />
          </IconBackground>
        </TouchableOpacity>
      </ContentInput>
    </Container>
  );
};
