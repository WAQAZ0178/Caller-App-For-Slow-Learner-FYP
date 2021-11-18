import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../../Global/Styles/Scalling';
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
    flex: 1,
    backgroundColor: theme,
  },
  callerInfoConmtainer: {
    alignItems: 'center',
    marginTop: hp(15),
    height: hp(12),
    justifyContent: 'space-between',
  },
  number: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 27,
    color: white,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: wp(90),
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: white,
    marginTop: hp(40),
    justifyContent: 'center',
  },

  button: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  callOptionButton: {
    flexDirection: 'row',
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(10),
    justifyContent: 'space-around',
    // borderWidth: 1,

    // borderColor: white,
  },
  optionContainer: {
    marginHorizontal: wp(3),
    alignItems: 'center',
  },
});
export default styles;
