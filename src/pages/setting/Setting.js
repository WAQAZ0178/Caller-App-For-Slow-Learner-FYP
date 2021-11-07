import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import styles from './Setting-Styles';
import {
  gray,
  darkGray,
  white,
  whiteGray,
  theme2,
  theme,
} from '../../Global/Styles/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../Components/Header/Header';
import Option from '../../Components/Setting-option/Option';

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Setting" />
      <View style={styles.navContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.optionContainer}>
          <Option title="Profile" IconName="logout" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Pending Request" IconName="logout" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('My_Order')}
          style={styles.optionContainer}>
          <Option title="My Order" IconName="my_order" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Earnings" IconName="earning" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Payment Details" IconName="logout" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Search Invoice" IconName="logout" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Notification" IconName="notification" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Term of Use" IconName="terms" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Option title="Log Out" IconName="logout" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
