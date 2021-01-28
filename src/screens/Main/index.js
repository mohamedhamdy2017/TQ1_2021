import React, {useState} from 'react';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {Images} from '../../../assets/Images';
import {AuthModal} from '../../components/AuthModal';
import styles from './styles';

export const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#F2BB24'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <View style={styles.container}>
          <Text style={styles.headText}>{'tmrw.car'}</Text>
          <Image source={Images.car} style={styles.image} resizeMode="cover" />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>{'WELCOME TO TMRW.CAR'}</Text>
            <Text style={styles.description}>
              {
                'The best place to sell and buy car, with all supports for you to have a best choice'
              }
            </Text>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.authContainer}
              activeOpacity={1}
              onPress={() => {
                setIsLogin(true);
                setIsVisible(true);
              }}>
              <Text style={styles.authText}>{'Login Now'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.authContainer,
                backgroundColor: '#000',
                height: 120,
              }}
              onPress={() => {
                setIsLogin(false);
                setIsVisible(true);
              }}
              activeOpacity={1}>
              <Text style={{...styles.authText, color: '#fff'}}>
                {'Create New Account'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <AuthModal
          isVisible={isVisible}
          closeModal={() => setIsVisible((prev) => !prev)}
          isLogin={isLogin}
        />
      </SafeAreaView>
    </>
  );
};
