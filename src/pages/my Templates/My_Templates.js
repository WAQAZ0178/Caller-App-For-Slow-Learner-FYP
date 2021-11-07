//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {black, theme} from '../../Global/Styles/Theme';
import styles from './My_Templates_styles';
import Data from './templatesdata';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// create a component
const My_Templates = () => {
  const renderMessages = item => {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Conversation')}
        style={{...styles.contactContainer}}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            {item.Text}
          </Text>
          <EvilIcons name="trash" color={black} size={30} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <Text style={styles.contactListHeadingText}>My Templates</Text>
      {/* <View style={styles.contactSearchBarcontainer}>
        <TextInput
          style={styles.searchContactListBox}
          placeholder={'Search Among ' + Data.length + ' Contacts'}
          placeholderTextColor="black"></TextInput>
      </View> */}
      <View style={styles.FlatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderMessages(item)}
        />
      </View>
    </View>
  );
};

export default My_Templates;
