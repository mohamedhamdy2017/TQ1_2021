import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/icomoon/selection.json';

import {FONTS} from '../../assets/fonts/bebas';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';

const Icomoon = createIconSetFromIcoMoon(icoMoonConfig);

export const AuthModal = ({isVisible, closeModal, isLogin}) => {
  const [selectedAuthType, setSelectedAuthType] = useState(false);

  useEffect(() => {
    setSelectedAuthType(isLogin);
  }, [isLogin]);

  return (
    <Modal
      isVisible={isVisible || false}
      swipeDirection={'up'}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.7}
      style={styles.modal}
      swipeDirection={null}>
      <TouchableOpacity
        style={[styles.authContainer, styles.switchButton]}
        activeOpacity={1}
        onPress={() => setSelectedAuthType((prev) => !prev)}>
        <Text style={styles.authText}>
          {selectedAuthType ? 'Create New Account' : 'Login'}
        </Text>
        <Icomoon name="arrow" size={20} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.container}>
        {selectedAuthType ? <Login /> : <Register />}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginHorizontal: 0,
    justifyContent: 'flex-end',
  },
  container: {
    height: 600,
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    padding: 25,
  },
  authContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
  },
  authText: {
    ...FONTS.bebas_regular,
    fontSize: 20,
    color: '#000',
  },
  authType: {...FONTS.bebas, fontSize: 25, marginVertical: 20},
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 30,
  },
  switchButton: {
    width: '100%',
    backgroundColor: '#F2BB24',
    height: 100,
    marginBottom: -30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:24,
    paddingBottom:15
  },
  icon: {width: 22},
});
