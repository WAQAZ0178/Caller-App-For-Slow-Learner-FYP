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
  black,
} from '../../Global/Styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme,
  },
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: white,
    height: hp(60),
    width: wp(100),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: hp(1),
    // borderWidth: 1,
    // borderColor: black,
    marginHorizontal: wp(3),
    paddingLeft: wp(5),
    color: black,
    fontSize: 18,
    width: wp(80),
    fontWeight: 'bold',
  },
  keypadNumberButtonText: {
    color: black,
    fontFamily: fontFamily.UbuntuBold,
    fontWeight: 'bold',
    fontSize: 25,
  },
  keypadButton: {
    // borderWidth: 1,
    // borderColor: black,
    height: hp(9),
    width: wp(31.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    // borderColor: black,
    marginTop: hp(3),
    height: hp(7),
    width: wp(93.3),
    alignSelf: 'center',
  },
  callButton: {
    width: wp(40),
    height: hp(7),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24C544',
  },
});
export default styles;
