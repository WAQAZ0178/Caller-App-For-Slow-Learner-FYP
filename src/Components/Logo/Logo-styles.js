import React from 'react';
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
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    minHeight: hp(12),
    width: wp(100),
    backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: white,
    justifyContent: 'space-between',
    marginLeft: wp(10),
    zIndex: 100,
  },
  text: {
    color: white,
    fontSize: 18,
    paddingRight: wp(10),
    textAlign: 'left',
    marginTop: hp(4),
    fontFamily: fontFamily.UbuntuRegular,
  },
  logo: {
    width: wp(40),
    height: hp(6),
    resizeMode: 'contain',
  },
});
export default styles;
