//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {black, theme, white} from '../../Global/Styles/Theme';
import Feather from 'react-native-vector-icons/Feather';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'My_Template.db'});
import {postFormData, GetTempaltes} from '../../Constants/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {hp} from '../../Global/Styles/Scalling';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
const Setting = ({navigation}) => {
  const isFocused = useIsFocused();

  const [sqlLiteTemplate, setsqlLiteTemplate] = useState();
  const [token, settoken] = useState('');
  useEffect(() => {
    getAllSQLLiteTemplate();
    getToken();
  }, [isFocused]);

  const createBackup = async () => {
    getAllSQLLiteTemplate();
    var id = token;
    for (var i = 0; i < sqlLiteTemplate.length; i++) {
      if (
        sqlLiteTemplate[i].is_sync === 'false' ||
        sqlLiteTemplate[i].is_sync === false
      ) {
        var tid = sqlLiteTemplate[i].tid;
        console.log(sqlLiteTemplate[i].tid);
        console.log(sqlLiteTemplate[i]);
        const formdata = new FormData();
        console.log('is sync false');
        formdata.append('template_text', sqlLiteTemplate[i].template_text);
        formdata.append('frequency', sqlLiteTemplate[i].template_frequency);
        formdata.append('is_sync', true);
        formdata.append('template_by', id);
        var res = await postFormData('AddTemplate', formdata);
        console.log('response from api', res);
        db.transaction(function (txn) {
          txn.executeSql(
            'UPDATE user_template set is_sync=? where tid=?',
            ['true', tid],

            (tx, results) => {
              console.log('Results', results.rowsAffected);
            },
          );
        });
      } else {
        console.log('already sync');
      }
    }
    alert('Backup Created successfully');
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
    // console.log('temp array', temp);
  };
  const signout = async () => {
    await AsyncStorage.setItem('user', '');
    navigation.replace('Login');
  };

  const logout = () => {
    Alert.alert('Logout', 'Do You Want To Logout ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => signout()},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../Assets/Images/no-profile.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.phoneNumberContainer}>
          <Feather name="phone-call" color={white} size={20} />
          <Text style={styles.phoneNumberText}>{token}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.syncContainer}>
          <TouchableOpacity
            onPress={() => getDataFromApi()}
            style={styles.syncButton}>
            <Text style={styles.SyncText}>Backup</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.syncContainer, marginTop: hp(3)}}>
          <TouchableOpacity
            onPress={() => createBackup()}
            style={styles.syncButton}>
            <Text style={styles.SyncText}>Create Backup</Text>
          </TouchableOpacity>
        </View>

        <View style={{...styles.syncContainer, marginTop: hp(3)}}>
          <TouchableOpacity onPress={() => logout()} style={styles.syncButton}>
            <Text style={styles.SyncText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Setting;
