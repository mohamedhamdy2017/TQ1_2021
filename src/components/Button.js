import React from 'react';
import {StyleSheet, TouchableOpacity,Text, ActivityIndicator} from 'react-native';
import { FONTS } from '../../assets/fonts/bebas';

export const Button = ({
  title,
  style,
  titleStyle,
  disabled,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      style={[styles.container,style]}
      {...rest}>
      {loading ? (
        <ActivityIndicator size={20} color={'#FFF'} />
      ) : (
        <Text style={styles.titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor:'#000'
  },
  titleStyle: {
      ...FONTS.bebas,
    color: '#F2BB24',
    fontSize: 25,
  },
});
