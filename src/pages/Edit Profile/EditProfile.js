//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './EditProfile-styles';
import {TextInput} from 'react-native-paper';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';

import {black, gray, theme, theme2, white} from '../../Global/Styles/Theme';
import BackSVG from '../../Assets/Svgs/profile_background.svg';
import Header from '../../Components/Header/Header';
import ArrowRight from '../../Assets/Svgs/arrowRight.svg';

import Logout from '../../Assets/Svgs/logout.svg';
import Address from '../../Assets/Svgs/address.svg';
import Help_Center from '../../Assets/Svgs/help_Center.svg';
import Person from '../../Assets/Svgs/person.svg';
import Payment from '../../Assets/Svgs/payment.svg';
import Wishlist from '../../Assets/Svgs/wishlist.svg';
import {hp, wp} from '../../Global/Styles/Scalling';
import EditIcon from '../../Assets/Svgs/edit.svg';
import {fontFamily} from '../../Global/Styles/Fonts';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = ({navigation}) => {
  function takePhoto() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setdp(image);
    });
  }
  const [dp, setdp] = useState(require('../../Assets/Images/image_1.jpg'));
  const [Name, setName] = useState('John Rellite');
  const [userName, setUSerName] = useState('John Rellite');
  const [email, setEmail] = useState('JohnRellite@mail.com');
  const [password, setPassword] = useState('00000000');
  const [gender, setGender] = useState('Male');
  const [date_Of_Birth, setDate_Of_Birth] = useState('12-07-1998');
  const [location, setLocation] = useState('punjab Pakistan');
  const [phone, setPhone] = useState('0000 0000 0000');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: theme2}}>
          <StatusBar backgroundColor={theme2} />
          <Header navigation={navigation} />
        </View>
        <BackSVG width={375} height={265} />
        <View style={styles.profileInfoContainer}>
          <Image
            style={styles.dp}
            source={require('../../Assets/Images/image_1.jpg')}
          />
          <Text style={styles.name}> WAQAS KHATTAK</Text>
          <TouchableOpacity
            onPress={() => takePhoto()}
            style={styles.editButton}>
            <Text style={styles.editText}>Change Profile Image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.topHeadingContainer}>
            <Text style={styles.detailsTextLAbel}>Details</Text>
            <EditIcon />
          </View>
          <View>
            <TextInput
              label={'Name'}
              value={Name}
              onChangeText={text => setName(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Name"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                width: wp(72.26),
                marginTop: hp(1),
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
                fontFamily: fontFamily.UbuntuRegular,
              }}
            />
            <TextInput
              label={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Email"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                marginTop: hp(1),
                width: wp(72.26),
                alignSelf: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                fontFamily: fontFamily.UbuntuRegular,
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'Password'}
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Password"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                width: wp(72.26),
                marginTop: hp(1),
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'User Name'}
              value={userName}
              onChangeText={text => setUSerName(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Uer Name"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                marginTop: hp(1),
                width: wp(72.26),
                alignSelf: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                fontFamily: fontFamily.UbuntuRegular,
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'Gender'}
              value={gender}
              onChangeText={text => setGender(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Gender"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                width: wp(72.26),
                marginTop: hp(1),
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'Date of Birth'}
              value={date_Of_Birth}
              onChangeText={text => setDate_Of_Birth(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Email"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                marginTop: hp(1),
                width: wp(72.26),
                alignSelf: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                fontFamily: fontFamily.UbuntuRegular,
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'Location'}
              value={location}
              onChangeText={text => setLocation(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Email"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                width: wp(72.26),
                marginTop: hp(1),
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
              }}
            />
            <TextInput
              label={'Phone'}
              value={phone}
              onChangeText={text => setPhone(text)}
              placeholderTextColor={white}
              backgroundColor={'transparent'}
              placeholder="Enter Email"
              underlineColor={'#818181'}
              outlineColor={'#818181'}
              theme={{
                colors: {
                  placeholder: '#9B9B9B',
                  text: white,
                  primary: '#9B9B9B',
                },
              }}
              style={{
                ...styles.input,
                marginTop: hp(1),
                width: wp(72.26),
                alignSelf: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
                fontFamily: fontFamily.UbuntuRegular,
                borderBottomColor: '#818181',
                borderBottomWidth: 0.1,
                marginBottom: hp(8),
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order_Tracing')}
          style={styles.signOutButton}>
          <Text style={styles.signoutText}> Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
