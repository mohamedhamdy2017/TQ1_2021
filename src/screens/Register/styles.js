import {StyleSheet} from 'react-native';
import {FONTS} from '../../../assets/fonts/bebas';

export default StyleSheet.create({
  authType: {...FONTS.bebas_regular, fontSize: 25, marginVertical: 20},
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonTitle: {marginTop: 20},
  seperatedLine: {
    width: 360,
    height: 1,
    backgroundColor: 'gray',
    marginTop: 40,
  },
  loginContainer: {
    width: 80,
    backgroundColor: '#fff',
    marginTop: -15,
    marginLeft: 145,
  },
  login: {textAlign: 'center', fontSize: 20, ...FONTS.bebas},
});
