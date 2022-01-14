import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../../Global/Styles/_scaling';
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

  headingTitle: {
    marginTop: mvs(200),
    fontFamily: fontFamily.UbuntuMedium,
    fontSize: 28,
    color: white,
    textAlign: 'center',
    paddingHorizontal: mvs(0),
  },
});
export default styles;
