import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './ContactList-styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Data from './StoryData';
import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2} from '../../Global/Styles/Theme';
import SearchBar from '../../Components/SearchBar/SearchBar';
const ContactList = ({navigation}) => {
  const [searchtxt, setSearchTxt] = useState('');
  const [searchContact, setsearchContact] = useState('');
  const [chats, setChats] = useState([]);

  const renderMessages = item => {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Conversation')}
        style={{...styles.contactContainer}}>
        <View style={styles.dpContainer}>
          <Image source={item.dp} style={styles.imageView} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.Name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      {/* <SearchBar
        val={searchContact}
        onchange={setsearchContact}
        placeholderTEXT="search contact"
        onpress={{}}
      /> */}
      <Text style={styles.contactListHeadingText}>All Contacts</Text>
      <View style={styles.contactSearchBarcontainer}>
        <TextInput
          style={styles.searchContactListBox}
          placeholder={'Search Among ' + Data.length + ' Contacts'}
          placeholderTextColor="black"></TextInput>
      </View>
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
export default ContactList;
