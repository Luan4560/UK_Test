import React from 'react';
import {ActivityIndicator} from 'react-native-paper';

export const Spinner = () => {
  return(
    <ActivityIndicator size="large" animating={true} color="#7fdeff" />
  );
};
