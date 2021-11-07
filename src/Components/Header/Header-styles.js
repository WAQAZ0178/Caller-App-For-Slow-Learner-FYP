import {View, StyleSheet, Text} from 'react-native';
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
  whiteGrayTwo,
} from '../../Global/Styles/Theme';
const styles = StyleSheet.create({
  headercontainer: {
    height: hp(7),
    width: wp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#11163A',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 4,
    shadowColor: black,
    flexDirection: 'row',
    // marginHorizontal: wp(4.8),
    paddingLeft: wp(4.8),
    paddingRight: wp(4.8),
  },
  iconContainer: {
    // borderWidth: 1,
    // borderColor: white,
    height: hp(6),
    width: wp(45),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: wp(40),
    // borderWidth: 1,
    // borderColor: white,
    resizeMode: 'contain',
    height: hp(6),
    justifyContent: 'center',
  },
  logo: {
    height: hp(4.5),
    width: wp(34.5),
    resizeMode: 'contain',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    backgroundColor: '#11163A',
    elevation: 3,
    shadowColor: gray,
    marginHorizontal: wp(1.5),
  },
});
export default styles;
