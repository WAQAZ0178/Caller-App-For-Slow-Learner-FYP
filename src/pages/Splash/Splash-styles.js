import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Global/Styles/Scalling';
import {theme, white} from '../../Global/Styles/Theme';
import {fontFamily} from '../../Global/Styles/Fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: hp(25),
    width: wp(100),
    marginTop: hp(15),
  },
  headeing: {
    marginTop: hp(8),

    fontFamily: fontFamily.UbuntuBold,
    color: white,
    fontSize: 40,
    lineHeight: 54,
    textAlign: 'center',
    paddingHorizontal: wp(5),
  },
});
export default styles;
