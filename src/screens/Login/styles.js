import {StyleSheet} from 'react-native';
import { FONTS } from '../../../assets/fonts/bebas';

export default StyleSheet.create({
  authType: {...FONTS.bebas_regular, fontSize: 25, marginVertical: 20},
  forget: {...FONTS.bebas_regular, fontSize: 20, marginVertical: 20},
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {marginTop: 30},
  seperatedLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginTop: 40,
  },
  seperatedTextContainer: {
    width: 80,
    backgroundColor: '#fff',
    marginTop: -12,
    marginLeft: '40%',
  },
  seperatedText: {textAlign: 'center', fontSize: 20, ...FONTS.bebas_regular},
});
