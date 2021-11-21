//import liraries
import React, {useState} from 'react';
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

const Home = ({navigation}) => {
  const [input, setinput] = useState('');
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
        onPress={() => speak_Search_Text(item.text)}>
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
        <TouchableOpacity onPress={() => speak_Search_Text(input)}>
          <Icon name="sound" color={black} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.mostFrequentButtonContainer}>
        <Text style={styles.mostFrequentTextHeading}>
          Most Frequent Sentences
        </Text>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => speak_Search_Text('SALAM')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Salam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => speak_Search_Text('WA SALAM')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}> Wa Salam</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => speak_Search_Text('ALLAH HAFIZ')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Allah Hafiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => speak_Search_Text('Okay')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>okay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            onPress={() => speak_Search_Text('Yes')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => speak_Search_Text('NO')}
            style={styles.mostFrequentButton}>
            <Text style={styles.ButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.mostFrequentTextHeading}>You'r Templates</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => renderTemplates(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Home;
