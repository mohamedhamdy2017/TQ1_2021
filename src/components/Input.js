import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {FONTS} from '../../assets/fonts/bebas';

export const Input = (props) => {
  return (
    <View
      style={[styles.container, props.error && {borderBottomColor: '#FF4949'}]}>
      <Text style={[styles.label, props.error && {color: '#FF4949'}]}>
        {props.label}
      </Text>
      <View style={styles.subContainer}>
        <TextInput
          blurOnSubmit={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          style={[styles.input, props.error && {color: '#FF4949'}]}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingTop: 10,
    borderBottomColor: '#989898',
    borderBottomWidth: 1,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    ...FONTS.bebas,
    color: 'gray',
    fontSize: 23,
  },
  input: {
    ...FONTS.bebas,
    fontSize: 17,
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingBottom: 5,
  },
  inputContainer: {
    width: '95%',
    height: 50,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  checkContainer: {
    backgroundColor: '#DDD',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
