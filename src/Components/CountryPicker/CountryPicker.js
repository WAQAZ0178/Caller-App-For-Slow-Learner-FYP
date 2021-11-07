import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import CountryPicker from 'react-native-country-codes-picker/components/CountryPicker';
import Ionic from 'react-native-vector-icons/Ionicons';

import ReactNativeModal from 'react-native-modal';
import Drop_icon from '../../Assets/Svgs/drop_icon.svg';
import {wp, hp} from '../../Global/Styles/Scalling';
import {black} from '../../Global/Styles/Theme';
import {color} from 'react-native-reanimated';
// import fontFamily from "../../config/fontFamily";
export const CustomCountryPicker = ({country, setCountry}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          width: '100%',
          paddingVertical: hp(0.99),
          paddingHorizontal: wp(1),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontFamily: '500',
            marginRight: wp(4),
            width: wp(15),
            color: black,
          }}>
          {country?.name} {country?.dial_code?.slice(0)}
        </Text>
        {/* <Ionic name="star" color="black" size={10} /> */}
        <Drop_icon width={wp(5)} />
      </TouchableOpacity>
      <ReactNativeModal isVisible={show} style={{marginBottom: 0}}>
        <View style={{flex: 1}}>
          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={item => {
              console.log(item);
              setCountry({
                ...country,
                name: item?.code,
                dial_code: item?.dial_code,
              });
              setShow(false);
            }}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};
const styles = StyleSheet.create({
  mdl: {
    color: black,
  },
});
