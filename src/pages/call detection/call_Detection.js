// How to Detect Call States in React Native App
// https://aboutreact.com/detect-call-states/

//Import React
import React, {useEffect, useState, useRef} from 'react';
import styles from './styles';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  FlatList,
  SafeAreaView,
  Image,
  AppState,
} from 'react-native';
import Tts from 'react-native-tts';
import CallDetectorManager from 'react-native-call-detection';
import {GetTempaltes, postFormData} from '../../Constants/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const App = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [Event, setEvent] = useState(false);
  const arr = ['hello sir ', 'how are you', ' oh my god are you there sir '];
  let callDetector = undefined;
  let [callStates, setCallStates] = useState([]);
  let [isStart, setIsStart] = useState(false);
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };

    {
      Event &&
        setInterval(() => {
          getAllMessages;
        }, 10000);
    }
  }, [Event]);

  const callFriendTapped = () => {
    Linking.openURL('tel:03407503006').catch(err => {
      console.log(err);
    });
  };
  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }
  const startStopListener = () => {
    if (isStart) {
      console.log('Stop');
      callDetector && callDetector.dispose();
    } else {
      console.log('Start');
      callDetector = new CallDetectorManager(
        async (event, number) => {
          console.log('event -> ', event + (number ? ' - ' + number : ''));
          var updatedCallStates = callStates;
          updatedCallStates.push(event + (number ? ' - ' + number : ''));
          setFlatListItems(updatedCallStates);
          setCallStates(updatedCallStates);

          // For iOS event will be either "Connected",
          // "Disconnected","Dialing" and "Incoming"

          // For Android event will be either "Offhook",
          // "Disconnected", "Incoming" or "Missed"
          // phoneNumber should store caller/called number

          if (event === 'Disconnected') {
            setEvent(false);
            Tts.stop();
          } else if (event === 'Connected') {
            console.log('  // Do something call got connected');
            // Do something call got connected
            // This clause will only be executed for iOS
          } else if (event === 'Incoming') {
            console.log('  // Do something call got incoming');
          } else if (event === 'Dialing') {
            // Do something call got dialing
            // This clause will only be executed for iOS
          } else if (event === 'Offhook') {
            setEvent(true);
            await getAllMessages();
            // console.log('  // Do something call got connected');
            // for (let i = 0; i < arr.length; i++) {
            //   await Tts.speak(arr[i]);
            //   console.log(arr[i]);
            // }
            //Device call state: Off-hook.
            // At least one call exists that is dialing,
            // active, or on hold,
            // and no calls are ringing or waiting.
            // This clause will only be executed for Android
          } else if (event === 'Missed') {
            // Do something call got missed
            // This clause will only be executed for Android
          }
        },
        true, // To detect incoming calls [ANDROID]
        () => {
          // If your permission got denied [ANDROID]
          // Only if you want to read incoming number
          // Default: console.error
          console.log('Permission Denied by User');
        },
        {
          title: 'Phone State Permission',
          message:
            'This app needs access to your phone state in order to react and/or to adapt to incoming calls.',
        },
      );
    }
    setIsStart(!isStart);
  };

  const getAllMessages = async () => {
    console.log('api data');
    var delay = 1000;
    const formdata = new FormData();
    formdata.append('message_to', '03447568968');
    var res = await postFormData('GetAllMessages', formdata);
    var arr = res.data;
    console.log(arr);
    // await Tts.setDefaultLanguage('ur-PK');
    await Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('ur-pk-x-cfn-network');
    for (let i = 0; i < arr.length; i++) {
      await timeout(delay);
      Tts.speak(arr[i]?.message_text);
      console.log(arr[i]?.message_text);
      delay = 5000;
    }
  };

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#ebebeb',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTextLarge}>
            Example to detect call states
          </Text>
          <Text style={styles.headerText}>www.aboutreact.com</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => getAllMessages()}
          style={styles.hiddenButtob}></TouchableOpacity>
        <FlatList
          style={{flex: 1}}
          data={flatListItems}
          ItemSeparatorComponent={listSeparator}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Text style={styles.callLogs}>{JSON.stringify(item)}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={startStopListener}>
          <Text style={styles.buttonText}>
            {isStart ? 'Stop Listner' : 'Start Listener'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={callFriendTapped}
          style={styles.fabStyle}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
            }}
            style={styles.fabImageStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
