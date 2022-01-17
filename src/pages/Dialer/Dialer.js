//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Dialer_styles';
import {hp} from '../../Global/Styles/Scalling';
import {theme, white} from '../../Global/Styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Dialer = ({navigation}) => {
  const [number, setnumber] = useState('');

  const RemoveLastDigit = () => {
    if (number.length > 0) {
      var newStr = number.slice(0, -1);
      setnumber(newStr);
    }
  };
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
  const connectCall = async () => {
    console.log(number);
    await AsyncStorage.setItem('dail_number', number);
    Linking.openURL(`tel:${number}`);
  };

  const renderNumber = item => {
    return (
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={() => setnumber(number + item.number)}
        style={styles.keypadButton}>
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
            placeholderTextColor={'red'}
            placeholderTextColor={theme}
            value={number}
            editable={false}
            maxLength={11}
            // onChangeText={txt => setnumber(txt)}
          />
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => RemoveLastDigit()}>
            <AntDesign
              style={{marginTop: hp(2)}}
              name="close"
              color={theme}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: hp(2),
            // borderWidth: 1,
            // borderColor: black,
            height: hp(37),
          }}>
          <FlatList
            data={keypadNumber}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => renderNumber(item)}
          />
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity
            onPress={() => connectCall()}
            style={styles.callButton}>
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
