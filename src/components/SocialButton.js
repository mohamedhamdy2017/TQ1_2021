import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const SocialButton = ({image}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {width: 25, height: 25},
});
