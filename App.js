//import liraries
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  NativeAppEventEmitter,
  AppState,
} from 'react-native';
import {theme} from './src/Global/Styles/Theme';
import ContactList from './src/pages/ContactList/ContactList';
import Dialer from './src/pages/Dialer/Dialer';
import Home from './src/pages/Home/Home';
import Incoming from './src/pages/Incoming Call/Incoming';
import Login from './src/pages/Login/Login';
import Logs from './src/pages/Logs/Logs';
import SokectIo from 'socket.io-client';
const io = SokectIo('http://192.168.100.9:3000');
import My_Templates from './src/pages/my Templates/My_Templates';
import Receive from './src/pages/Receive Call/Receive';
import Signup from './src/pages/Signup/Signup';
import Test from './src/pages/test';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import Splash from './src/pages/Splash/Splash';
import Account_Type from './src/pages/Account Type/Account_Type';
import Received_Messages from './src/pages/Received Messages/Received_Messages';
import Call_Detect from './src/pages/call detection/call_Detection';
import {StateProvider} from './src/store';

const App = () => {
  const appState = useRef(AppState.currentState);
  const SocketContext = React.createContext();
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

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
  }, []);

  return (
    // <View style={styles.container}>
    //   <Call_Detect />
    // </View>
    <StateProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </StateProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
