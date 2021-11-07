import React from 'react';
import {View, Text} from 'react-native';
import styles from './Option-Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {
  gray,
  darkGray,
  white,
  whiteGray,
  black,
} from '../../Global/Styles/Theme';
import {SVGS} from '../../Assets/Index';
// import SVGS from '../../Assets/Svgs/index';

const Option = ({title, IconName = 'logo', IconColor}) => {
  const Icon = SVGS[IconName];
  // console.log('svg:', SVGS);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon width={30} height={30} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <MaterialIcons name="arrow-forward-ios" size={20} color={gray} />
      </View>
    </View>
  );
};

export default Option;
