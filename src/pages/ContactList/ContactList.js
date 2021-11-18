import React, {useState, useEffect} from 'react';
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
  PermissionsAndroid,
} from 'react-native';
import styles from './ContactList-styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Data from './StoryData';
import momemt from 'moment';
import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {theme, theme2} from '../../Global/Styles/Theme';
import Contacts from 'react-native-contacts';
const ContactList = ({navigation}) => {
  const [searchtxt, setSearchTxt] = useState('');
  const [searchContact, setsearchContact] = useState('');
  const [chats, setChats] = useState([]);
  const [cellContacts, setcellContacts] = useState([]);

  const addContact = () => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    ]).then(
      Contacts.getAll().then(contacts => {
        // console.log('hello', contacts);
        setcellContacts(contacts);
      }),
    );
  };

  useEffect(() => {
    addContact();
  }, []);
  const renderMessages = item => {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Conversation')}
        style={{...styles.contactContainer}}>
        <View style={styles.dpContainer}>
          <Image
            source={require('../../Assets/Images/no-profile.jpg')}
            style={styles.imageView}
          />
        </View>
        {/* {console.log(item.phoneNumbers[0].number)} */}
        <View style={styles.infoContainer}>
          <Text style={styles.Name}>{item.displayName}</Text>
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
          placeholder={'Search Among ' + cellContacts.length + ' Contacts'}
          placeholderTextColor="black"></TextInput>
      </View>
      <View style={styles.FlatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cellContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderMessages(item)}
        />
      </View>
    </View>
  );
};
export default ContactList;
