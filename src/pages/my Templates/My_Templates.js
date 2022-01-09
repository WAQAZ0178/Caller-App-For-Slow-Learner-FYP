//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {black, theme, white} from '../../Global/Styles/Theme';
import styles from './My_Templates_styles';
import Data from './templatesdata';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'My_Template.db'});
import {postFormData, GetTempaltes} from '../../Constants/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {hp} from '../../Global/Styles/Scalling';
import {useIsFocused} from '@react-navigation/native';

const My_Templates = ({navigation}) => {
  const isFocused = useIsFocused();

  const [sqlLiteTemplate, setsqlLiteTemplate] = useState();
  const [token, settoken] = useState('');
  useEffect(() => {
    getAllSQLLiteTemplate();
    getToken();
  }, [isFocused]);

  const getDataFromApi = async () => {
    console.log('api data');
    var res = await GetTempaltes('GetAllTemplate');
    // console.log(res.data);
    var arr = [];
    for (var i = 0; i < res.data.length; i++) {
      if (res.data[i].template_by === token) {
        arr.push(res.data[i]);
      }
    }
    console.log('data with token', arr);
  };

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
  const DeleteTemplate = item => {
    console.log(item);
    console.log(token);
    var id = parseInt(item.tid);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  user_template where tid=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          // if (results.rowsAffected > 0) {
          //   Alert.alert(
          //     'Success',
          //     'User deleted successfully',
          //     [
          //       {
          //         text: 'Ok',
          //         onPress: () => navigation.navigate('HomeScreen'),
          //       },
          //     ],
          //     { cancelable: false }
          //   );
          // } else {
          //   alert('Please insert a valid User Id');
          // }
        },
      );
    });
    getAllSQLLiteTemplate();
  };

  const getAllSQLLiteTemplate = () => {
    console.log('get data ');
    const temp = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM user_template', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        console.log('all data from databse ', temp);
        console.log('before', temp);
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

  const renderMessages = item => {
    return (
      <View style={{...styles.contactContainer}}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            {item.template_text}
          </Text>
          <TouchableOpacity onPress={() => DeleteTemplate(item)}>
            <EvilIcons name="trash" color={white} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme} />
      <Text style={styles.contactListHeadingText}>My Templates</Text>
      <View style={styles.FlatListContainer}>
        {sqlLiteTemplate && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={sqlLiteTemplate}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => renderMessages(item)}
          />
        )}
      </View>
      <View style={styles.syncContainer}>
        <TouchableOpacity
          onPress={() => getDataFromApi()}
          style={styles.syncButton}>
          <Text style={styles.SyncText}>Backup</Text>
        </TouchableOpacity>
      </View>
      <View style={{...styles.syncContainer, marginBottom: hp(2)}}>
        <TouchableOpacity
          onPress={() => createBackup()}
          style={styles.syncButton}>
          <Text style={styles.SyncText}>Create Backup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default My_Templates;
