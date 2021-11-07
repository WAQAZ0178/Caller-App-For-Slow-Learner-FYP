import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {
  gray,
  darkGray,
  white,
  black,
  whiteGray,
  theme2,
  theme,
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme,
  },
  profileInfoContainer: {
    // borderWidth: 1,
    // borderColor: white,
    position: 'absolute',
    alignSelf: 'center',
    top: hp(10),
    height: hp(28),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dp: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(9),
    alignSelf: 'center',
  },
  name: {
    fontFamily: fontFamily.UbuntuMedium,
    fontSize: 18,
    color: white,
    lineHeight: 21,
    fontWeight: '500',
  },
  editButton: {
    height: hp(6),
    width: wp(68),
    backgroundColor: '#191D42',
    borderRadius: 6,
    shadowColor: '#FFFFFF29',
    shadowOpacity: 1,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  editText: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 14,
    color: white,
    lineHeight: 16,
    fontWeight: '400',
  },

  signOutButton: {
    justifyContent: 'space-evenly',
    paddingHorizontal: wp(4),
    alignItems: 'center',
    height: hp(5.41),
    width: wp(37.33),
    borderRadius: 4,
    backgroundColor: white,
    alignSelf: 'center',
    marginTop: hp(1),
    flexDirection: 'row',
    marginBottom: hp(4),
  },
  signoutText: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 16,
    color: theme2,
    lineHeight: 24,
    fontWeight: '400',
  },
  inputContainer: {
    width: wp(85.6),
    borderRadius: 6,
    backgroundColor: theme2,
    flex: 1,
    alignSelf: 'center',
    marginTop: hp(3.69),
    marginBottom: hp(5),
  },
  topHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(7),
    marginTop: hp(3),
  },
  detailsTextLAbel: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 16,
    color: '#878787',
    lineHeight: 19,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
export default styles;
