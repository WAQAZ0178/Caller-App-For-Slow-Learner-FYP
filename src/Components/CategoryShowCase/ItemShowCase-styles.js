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
  showCaseContainer: {
    height: hp(18),
    width: wp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4.92),
    // borderColor: white,
    // borderWidth: 1,
  },
  titleContainer: {
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp(4.8),
    paddingRight: wp(4.8),
  },
  itemContainer: {
    paddingLeft: wp(4.8),
    paddingRight: wp(4.8),
    width: wp(100),
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  item: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(8),
    backgroundColor: theme2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    lineHeight: 21,
    color: white,
  },
  seeAll: {
    fontFamily: fontFamily.UbuntuRegular,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 21,
    color: white,
  },
  itembuttonContainer: {
    alignItems: 'center',
  },
  itemName: {
    marginTop: hp(2),
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 14,
    color: white,
    lineHeight: 16,
  },
  // wi16
  // h7.38
});
export default styles;
