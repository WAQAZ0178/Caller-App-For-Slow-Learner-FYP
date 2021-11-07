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
  searchBar: {
    height: hp(6),
    width: wp(100),
    justifyContent: 'space-between',
    marginTop: hp(3),
    paddingLeft: wp(4.8),
    flexDirection: 'row',
    paddingRight: wp(4.8),
    // borderColor: white,
    // borderWidth: 1,
    alignItems: 'center',
  },
  searchbarContainer: {
    width: wp(75.5),
    height: hp(5.5),
    backgroundColor: '#11163A',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    // borderColor: white,
    // borderWidth: 1,
    paddingLeft: wp(4),
  },
  iconButton: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    resizeMode: 'contain',
  },

  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    backgroundColor: '#11163A',
    elevation: 4,
    shadowColor: gray,
    marginHorizontal: wp(2),
  },
  searchicon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
  },
  input: {
    // borderColor: white,
    // borderWidth: 1,
    width: wp(60),
    color: white,
  },
});
export default styles;
