//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ReactNativeModal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';
import Tts from 'react-native-tts';
import {black, gray, theme2, theme3, white} from '../../Global/Styles/Theme';
import {postFormData, GetTempaltes} from '../../Constants/API';

// create a component
const Received_Messages = navigation => {
  const [seller, setSeller] = React.useState(false);
  const [buyer, setbuyer] = useState(false);
  const [signupMode, setsignupMode] = useState('Buyer');

  useEffect(() => {
    getAllMessages();
  }, []);

  const speak_Search_Text = async text => {
    await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.speak(text);
  };
  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }
  const getAllMessages = async () => {
    console.log('api data');
    var res = await GetTempaltes('GetAllMessages');
    var arr = res.data;

    // await Tts.setDefaultLanguage('ur-PK');
    await Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('ur-pk-x-cfn-network');
    // await Tts.setDefaultVoice('ur-pk-x-urm-local');
    // await Tts.setDefaultVoice('ur-PK-language');
    // await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // await Tts.setDefaultLanguage('ur-pk-x-urm-local');
    // await Tts.setDefaultLanguage('ur-pk-x-urm-local');

    for (let i = 0; i < arr.length; i++) {
      await timeout(5000);
      Tts.speak(arr[i].message_text);
      console.log(arr[i].message_text);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Please Select Account Type </Text>
      <TouchableOpacity onPress={() => getAllMessages()}>
        {/* <Text>getAllMessages</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Received_Messages;
