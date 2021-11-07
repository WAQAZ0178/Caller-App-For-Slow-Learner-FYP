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
  inputContainer: {
    alignSelf: 'center',
    // marginTop: hp(6),
    width: wp(95),
    // height: hp(7),
    // backgroundColor: 'red',
    borderRadius: 10,
    // borderWidth: 0.5,
    // borderColor: gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  input: {
    width: wp(90),
    height: hp(7),
    backgroundColor: 'transparent',
    color: white,
  },
});
export default styles;
