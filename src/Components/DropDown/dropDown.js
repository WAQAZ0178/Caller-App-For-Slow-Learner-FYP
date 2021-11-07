//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import styles from './dropDown-styles';
import {hp, wp} from '../../Global/Styles/Scalling';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {black} from '../../Global/Styles/Theme';
import ReactNativeModal from 'react-native-modal';
import {fontFamily, fontSize} from '../../Global/Styles/Fonts';

const DropDown = ({data, val, onchange, show, setShow}) => {
  return (
    <ReactNativeModal style={{marginBottom: 0, zIndex: 100}} visible={show}>
      <View style={styles.modalView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginBottom: hp(1)}}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onchange(item.value);
                setShow(false);
              }}
              style={styles.itemButton}>
              <Text style={styles.label}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ReactNativeModal>
  );
};
{
  /* <Text style={styles.categoryText}>{heading}</Text>
      <View style={styles.pickerStyling}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor={black}
            selectedValue={val}
            itemStyle={styles.itemStyle}
            onValueChange={(itemValue, itemIndex) => onchange(itemValue)}>
            {data?.map(element => (
              <Picker.Item label={element.label} value={element.value} />
            ))}
          </Picker>
        </View>
      </View> */
}
export default DropDown;
