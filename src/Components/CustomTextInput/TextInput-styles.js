import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {
  gray,
  darkGray,
  white,
  whiteGray,
  theme2,
  theme,
  black,
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    width: wp(95),
    height: hp(8),
    // backgroundColor: 'red',
    borderColor: whiteGray,
    borderBottomWidth: 1,
    marginVertical: hp(1),
    alignSelf: 'center',
    paddingLeft: wp(4),
    paddingRight: wp(5),
  },
  input: {
    color: black,
    fontSize: 15,
  },
});
export default styles;
