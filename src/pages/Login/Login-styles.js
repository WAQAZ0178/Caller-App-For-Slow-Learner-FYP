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
  mainView: {flex: 1, backgroundColor: theme},
  container: {
    alignItems: 'center',
  },
  input: {
    width: wp(90),
    height: hp(10),
    backgroundColor: 'transparent',
    color: white,
    alignSelf: 'center',
  },
  inputContainer: {
    width: wp(90),
    // borderColor: white,
    // borderWidth: 1,
    height: hp(23),
    marginTop: hp(5),
    justifyContent: 'space-between',

    // justifyContent: 'center',
  },
  navLink: {
    marginTop: hp(5),
  },
  buttonStyle: {
    marginTop: hp(10),
  },
});
export default styles;
