import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {FONTS} from '../../../assets/fonts/bebas';
import {Images} from '../../../assets/Images';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {SocialButton} from '../../components/SocialButton';
import styles from './styles';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Register = () => {
  const {handleSubmit, errors, control} = useForm();

  const onSubmit = (values) => {
    alert('SUCCESS');
  };
  return (
    <>
      <Text style={styles.authType}>{'Create New Account'}</Text>
      <Controller
        defaultValue=""
        name="userName"
        control={control}
        rules={{
          required: true,
        }}
        render={({onChange, value}) => {
          return (
            <Input
              placeholder="Enter username"
              label={errors.userName ? 'Enter User Name' : 'User Name'}
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors.userName}
            />
          );
        }}
      />
      <Controller
        defaultValue=""
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: EMAIL_REGEX,
          },
        }}
        render={({onChange, value}) => {
          return (
            <Input
              placeholder="Your email"
              label={errors.email ? 'Invalid Email Address' : 'Email'}
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors.email}
            />
          );
        }}
      />
      <Controller
        defaultValue=""
        name="password"
        control={control}
        rules={{required: {value: true}}}
        render={({onChange, value}) => {
          return (
            <Input
              placeholder="Enter password"
              label={errors.password ? 'Enter Password' : 'Password'}
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors.password}
              secureTextEntry
            />
          );
        }}
      />

      <Button
        style={styles.buttonTitle}
        title="Register New Account"
        onPress={handleSubmit(onSubmit)}
      />

      <View style={styles.seperatedLine} />
      <View style={styles.loginContainer}>
        <Text style={styles.login}>{'Login'}</Text>
      </View>
      <View style={styles.socialButtonsContainer}>
        <SocialButton image={Images.A} />
        <SocialButton image={Images.F} />
        <SocialButton image={Images.G} />
      </View>
    </>
  );
};