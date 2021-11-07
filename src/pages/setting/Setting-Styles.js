import React from 'react';
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
} from '../../Global/Styles/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  navContainer: {
    flex: 1,
    // marginRight: wp(3),
    // paddingLeft: wp(4),
  },
  optionContainer: {
    height: hp(9),
    // backgroundColor: 'red',
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 5,
  },
  titleContainer: {
    width: wp(65),
    marginLeft: wp(4),
  },
  titleText: {
    color: black,
    fontFamily: 'ProximaNova-Regular',
    fontSize: 15,
    color: black,
  },
  arrowContainer: {
    width: wp(10),
    // marginRight: wp(1),
    marginLeft: wp(2),
  },
});
export default styles;
