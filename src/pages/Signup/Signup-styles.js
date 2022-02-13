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
    height: hp(22),
    marginTop: hp(2),
    justifyContent: 'space-between',

    // justifyContent: 'center',
  },
  navLink: {
    marginTop: hp(2),
    // marginBottom: hp(10),
  },
  buttonStyle: {
    marginTop: hp(4),
  },
  radioButtonContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    width: wp(89.33),
    paddingLeft: wp(5),
    justifyContent: 'flex-start',
  },
  button_text_container: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  AccountYpeText: {
    marginTop: hp(2),
    color: white,
    fontSize: 16,
    fontFamily: fontFamily.UbuntuMedium,
  },
  radioButtonText: {
    color: white,
    fontSize: 16,
    fontFamily: fontFamily.UbuntuRegular,
  },
  radioButtonParentContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
