import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Logo from '../../Assets/Images/logo.png';
import Notification from '../../Assets/Svgs/notification_icon.svg';
import Message from '../../Assets/Svgs/message_icon.svg';
import ProfileIcon from '../../Assets/Svgs/Profile.svg';
import styles from '../Header/Header-styles';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {hp, wp} from '../../Global/Styles/Scalling';
import {white} from '../../Global/Styles/Theme';
import Cart from '../../Assets/Svgs/cart.svg';
const Header = ({navigation}) => {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('All_Chat')}
          style={styles.iconButton}>
          <Message />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.iconButton}>
          <Material name="cart" color={'#818181'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.iconButton}>
          <Notification />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.iconButton}>
          <Material name="account" color={'#818181'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
