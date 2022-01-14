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

  buttonContainer: {
    marginTop: mvs(30),
  },
  radioButtonContainer: {
    marginTop: mvs(20),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme2,
    height: mvs(70),
    width: mvs(320),
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: mvs(10),
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 3,
  },
  buttonText: {
    fontFamily: fontFamily.UbuntuRegular,
    fontSize: 18,
    color: white,
    lineHeight: 22,
    marginLeft: mvs(2),
  },
  navButton: {
    backgroundColor: white,
    height: mvs(60),
    borderRadius: 100,
    width: mvs(300),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mvs(200),
    alignSelf: 'center',
    shadowColor: {theme},
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonLabel: {
    fontFamily: fontFamily.UbuntuMedium,
    fontSize: 18,
    color: black,
    lineHeight: 22,
  },
});
export default styles;
