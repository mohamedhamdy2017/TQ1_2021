import {StyleSheet} from 'react-native';
import {FONTS} from '../../../assets/fonts/bebas';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2BB24',
  },
  image: {
    width: '100%',
    height: '35%',
    marginTop: '30%',
  },
  headText: {
    fontSize: 25,
    position: 'absolute',
    top: 30,
    left: 20,
  },
  welcomeContainer: {
    padding: 20,
  },
  welcome: {
    fontSize: 35,
    ...FONTS.bebas_bold,
  },
  description: {
    ...FONTS.bebas,
    fontSize: 30,
    marginTop: 30,
  },
  bottomContainer: {
    bottom: 0,
    width: '100%',
    height: 180,
    position: 'absolute',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  authContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
  },
  authText: {fontSize: 25, marginLeft: 20, ...FONTS.bebas},
});
