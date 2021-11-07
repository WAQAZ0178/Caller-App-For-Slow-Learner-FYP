import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';

import Logo from '../../Assets/Images/logo.png';
import Filter from '../../Assets/Svgs/filter.svg';
import Search from '../../Assets/Svgs/search.svg';
import styles from './SaerchBar-styles';
import WriteMessage from '../../Assets/Svgs/writeMessage.svg';
const Header = ({
  val,
  onchange,
  isMessage = false,
  placeholderTEXT = 'Search for Anything',
  onpress,
}) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchbarContainer}>
        <TouchableOpacity style={styles.searchicon}>
          <Search />
        </TouchableOpacity>
        <TextInput
          value={val}
          onChangeText={onchange}
          placeholder={placeholderTEXT}
          placeholderTextColor="#818181"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.iconButton} onPress={onpress}>
        {isMessage === true ? <WriteMessage /> : <Filter />}
      </TouchableOpacity>
    </View>
  );
};
export default Header;
