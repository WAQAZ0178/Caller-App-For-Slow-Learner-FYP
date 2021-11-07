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
  black,
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    height: hp(5.41),
    borderRadius: 30,
    width: wp(81.33),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: white,
    borderWidth: 1,
    marginHorizontal: wp(9.33),
  },
  btnText: {
    color: black,
    fontFamily: fontFamily.UbuntuMedium,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default styles;
