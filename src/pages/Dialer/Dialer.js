//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Dialer_styles';

import {wp, hp} from '../../Global/Styles/Scalling';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';
import {black, theme, theme2, white} from '../../Global/Styles/Theme';
const Dialer = ({navigation}) => {
  const keypadNumber = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: '*'},
    {number: 0},
    {number: '#'},
  ];
  const [number, setnumber] = useState('03447568968');
  const renderNumber = item => {
    return (
      <TouchableOpacity style={styles.keypadButton}>
        {console.log('hello')}
        <Text style={styles.keypadNumberButtonText}>{item.number}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile number"
            placeholderTextColor="black"
            value={number}
            onChangeText={txt => setnumber(txt)}
          />
          <AntDesign
            style={{marginTop: hp(2)}}
            name="close"
            color="black"
            size={25}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: hp(4),
            // borderWidth: 1,
            // borderColor: black,
            height: hp(35),
          }}>
          <FlatList
            data={keypadNumber}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => renderNumber(item)}
          />
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={{...styles.keypadNumberButtonText, color: white}}>
              Call
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dialer;
