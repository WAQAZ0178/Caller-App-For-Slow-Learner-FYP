//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {black, theme, white} from '../../Global/Styles/Theme';
import styles from './Home_styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {gray} from '../../Global/Styles/Theme';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'user_Template.db'});

const Home = ({navigation}) => {
  const [tabBarButton, settabBarButton] = useState('All');
  const [input, setinput] = useState('');
  const [token, settoken] = useState('');
  const [flag, setflag] = useState(0);
  const [sqlLiteTemplate, setsqlLiteTemplate] = useState();

  useEffect(() => {
    setflag(0);
    checkDatabase();
    getAllSQLLiteTemplate();
    getToken();
  }, []);

  useEffect(() => {
    if (flag > 0) {
      getAllSQLLiteTemplate();
    }
  }, [flag]);

  const getToken = async () => {
    var user = await AsyncStorage.getItem('user');
    settoken(user);
  };
  const getAllSQLLiteTemplate = async () => {
    await db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_template', [], (tx, results) => {
        console.log(results);
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log('all sql lite templates', temp);
      });
      setsqlLiteTemplate(temp);
    });
  };
  const storeTemplate = async txt => {
    speak_Search_Text(txt);
    db.transaction(function (txn) {
      txn.executeSql(
        'INSERT INTO user_template (template_text,is_sync,template_frequency) VALUES (?,?,?)',
        [txt.toString(), 'false', 1],
        (t, re) => console.log('success'),
        (t, re) => console.log('failed'),
      );
    });
    setflag(flag + 1);
  };
  const checkDatabase = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS user_template(tid INTEGER PRIMARY KEY AUTOINCREMENT, template_text TEXT, is_sync TEXT, template_frequency INTEGER)',
        [],
        (t, re) => console.log('success'),
        (t, re) => console.log('failed'),
      );
    });
  };
  const data = [
    {text: 'hello sir How are You'},
    {text: `I'm Fine sir `},
    {text: 'I will be there soon '},
    {text: 'no problem dear'},
    {text: 'yes ofcourse its important meeting'},
    {text: 'okay  i will wait  '},
    {text: 'sorry i dont have time '},
    {text: 'let me know when you get the message '},
  ];
  const speak_Search_Text = text => {
    Tts.setDefaultLanguage('ur-PK');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.speak(text);
  };
  const renderTemplates = item => {
    return (
      <TouchableOpacity
        style={styles.templateButton}
        onPress={() => setinput(input + item.text)}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.flatListButtonText}>
          {item.text}
        </Text>
        <Icon name="sound" color={black} size={20} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <View style={styles.TopHeaderContainer}>
        <TextInput
          placeholder="Enter Text to Speech"
          value={input}
          onChangeText={text => setinput(text)}
          placeholderTextColor={black}
          style={styles.inputBox}></TextInput>
        <TouchableOpacity onPress={() => storeTemplate(input)}>
          <Icon name="sound" color={black} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.mostFrequentButtonContainer}>
        <Text style={styles.mostFrequentTextHeading}>
          Most Frequent Sentences
        </Text>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => setinput(input + ' ASSALAM O ALIKUM ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Salam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setinput(input + ' WA SALAM')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}> Wa Salam</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => setinput(input + ' ALLAH HAFIZ ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Allah Hafiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setinput(input + ' OKAY ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>okay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => setinput(input + ' Yes ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setinput(input + ' NO ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            onPress={() => settabBarButton('All')}
            style={{
              ...styles.tabBarButton,
              borderBottomColor: tabBarButton === 'All' ? theme : 'white',
            }}>
            <Text
              style={{
                ...styles.tabBarButtonText,
                color: tabBarButton === 'All' ? theme : '#808080',
              }}>
              All Templates
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => settabBarButton('Frequent')}
            style={{
              ...styles.tabBarButton,
              borderBottomColor: tabBarButton === 'Frequent' ? theme : 'white',
            }}>
            <Text
              style={{
                ...styles.tabBarButtonText,
                color: tabBarButton === 'Frequent' ? theme : '#808080',
              }}>
              Most Frequent
            </Text>
          </TouchableOpacity>
        </View>
        {tabBarButton === 'All' ? (
          <View style={styles.flatListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => renderTemplates(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <View style={styles.flatListContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={sqlLiteTemplate}
              renderItem={({item}) => renderTemplates(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Home;
