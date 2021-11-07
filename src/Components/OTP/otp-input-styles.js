import {StyleSheet} from 'react-native';
import {fontFamily} from '../../Global/Styles/Fonts';
import {hp, wp} from '../../Global/Styles/Scalling';
import {black, darkGray, gray, theme2, white} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  root: {},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: hp(2), marginHorizontal: wp(5)},
  cell: {
    width: wp(12),
    height: hp(7),
    marginHorizontal: wp(0.5),
    borderRadius: 6,
    fontSize: 20,
    lineHeight: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: fontFamily.UbuntuRegular,

    textAlign: 'center',
  },
  focusCell: {
    backgroundColor: '#3A4385',
    color: white,
  },
});
export default styles;
