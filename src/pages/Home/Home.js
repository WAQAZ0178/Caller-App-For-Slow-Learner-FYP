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
import {black, theme, theme2, white} from '../../Global/Styles/Theme';
import styles from './Home_styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {gray} from '../../Global/Styles/Theme';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'My_Template.db'});
import {useIsFocused} from '@react-navigation/native';
import {postFormData} from '../../Constants/API';

const Home = ({navigation}) => {
  const isFocused = useIsFocused();

  const [tabBarButton, settabBarButton] = useState('All');
  const [input, setinput] = useState('');
  const [token, settoken] = useState('');
  const [flag, setflag] = useState(0);
  const [sqlLiteTemplate, setsqlLiteTemplate] = useState([]);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);

  useEffect(() => {
    getAllSQLLiteTemplate();
    checkDatabase();
    getToken();
  }, [isFocused]);

  // useEffect(() => {
  //   getAllSQLLiteTemplate();
  // }, [flag]);

  const updateTemplate = item => {
    console.log(item);
    var id = item.tid;
    var frequency = parseInt(item.template_frequency);
    frequency = frequency + 1;
    console.log(frequency);
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE user_template set template_frequency=? where tid=?',
        [frequency, id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          // if (results.rowsAffected > 0) {
          //   Alert.alert(
          //     'Success',
          //     'User updated successfully',
          //     [
          //       {
          //         text: 'Ok',
          //         onPress: () => navigation.navigate('HomeScreen'),
          //       },
          //     ],
          //     {cancelable: false},
          //   );
          // } else alert('Updation Failed');
        },
      );
    });
    getAllSQLLiteTemplate();
  };

  const getToken = async () => {
    var user = await AsyncStorage.getItem('user');
    settoken(user);
  };

  const getAllSQLLiteTemplate = () => {
    console.log('get data ');
    const temp = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_template', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        // console.log('all data from databse ', temp);
        // console.log('before', temp);
        var arr = temp.sort((a, b) => {
          // console.log(a.template_frequency + '' + b.template_frequency);
          return b.template_frequency - a.template_frequency;
        });
        // console.log('after', arr);
        setsqlLiteTemplate(arr);
      });
    });
    console.log('temp array', temp);
  };
  const storeTemplate = async txt => {
    await Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('ur-pk-x-cfn-network');
    var user = await AsyncStorage.getItem('user');
    var dailed_number = await AsyncStorage.getItem('dail_number');
    const formdata = new FormData();
    formdata.append('message_text', txt);
    formdata.append('message_from', user);
    formdata.append('message_to', dailed_number);
    formdata.append('message_status', 'unseen');
    // speak_Search_Text(txt);
    var response = await postFormData('SendMessage', formdata);
    console.log(response.data);
    db.transaction(function (txn) {
      txn.executeSql(
        'SELECT * FROM user_template  where template_text=?',
        [txt],
        (t, re) => {
          if (re.rows.length > 0) {
            const row = re.rows.item(0);
            var id = row.tid;
            var frequency = parseInt(row.template_frequency);
            frequency = frequency + 1;
            txn.executeSql(
              'UPDATE user_template set template_frequency=? where tid=?',
              [frequency, id],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
              },
            );
          } else {
            txn.executeSql(
              'INSERT INTO user_template (template_text,is_sync,template_frequency) VALUES (?,?,?)',
              [txt.toString(), 'false', 1],
              (t, re) => console.log('success', re),
              (t, re) => console.log('failed'),
            );
          }
        },
        (t, re) => console.log('failed'),
      );
    });
    getAllSQLLiteTemplate();
    // setflag(flag + 1);
    setinput('');
  };
  const checkDatabase = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS user_template(tid INTEGER PRIMARY KEY AUTOINCREMENT, template_text TEXT, is_sync TEXT, template_frequency INTEGER)',
        [],
        (t, re) => console.log('database is created ', re.rows.item.length),
        (t, re) => console.log('failed'),
      );
    });
  };
  const data = [
    {template_text: 'hello sir How are You'},
    {template_text: `I'm Fine sir `},
    {template_text: 'I will be there soon '},
    {template_text: 'no problem dear'},
    {template_text: 'yes of course its important meeting'},
    {template_text: 'okay  i will wait  '},
    {template_text: `sorry i don't have time`},
    {template_text: 'let me know when you get the message '},
  ];
  const speak_Search_Text = async text => {
    await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.speak(text);
  };
  const renderFrequentTemplates = item => {
    // console.log(item);
    return (
      <View style={styles.templateButton}>
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 10, right: 10}}
          onPress={() => setinput(input + item.template_text)}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.flatListButtonText}>
            {item.template_text}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          // onPress={() => updateTemplate(item)}
          style={styles.speakerbutton}>
          <Icon name="sound" color={black} size={25} />
        </TouchableOpacity> */}
      </View>
    );
  };
  const renderTemplates = item => {
    return (
      <View style={styles.templateButton}>
        <TouchableOpacity onPress={() => setinput(input + item.template_text)}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.flatListButtonText}>
            {item.template_text}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.speakerbutton}>
          <Icon name="sound" color={black} size={20} />
        </TouchableOpacity> */}
      </View>
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
            onPress={() => setinput(input + ' Assalam O Alaikum')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Salam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setinput(input + ' Walaikum Assalam')}
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
              borderBottomColor: tabBarButton === 'All' ? white : theme2,
            }}>
            <Text
              style={{
                ...styles.tabBarButtonText,
                color: tabBarButton === 'All' ? white : '#808080',
              }}>
              All Templates
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => settabBarButton('Frequent')}
            style={{
              ...styles.tabBarButton,
              borderBottomColor: tabBarButton === 'Frequent' ? white : theme2,
            }}>
            <Text
              style={{
                ...styles.tabBarButtonText,
                color: tabBarButton === 'Frequent' ? white : '#808080',
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
              renderItem={({item}) => renderFrequentTemplates(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Home;
