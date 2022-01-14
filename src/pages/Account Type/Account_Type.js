//import liraries
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ReactNativeModal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';
import {black, gray, theme2, theme3, white} from '../../Global/Styles/Theme';

// create a component
const Signup_Modal = ({visible, setvisibale, navigation}) => {
  const [seller, setSeller] = React.useState(false);
  const [buyer, setbuyer] = useState(false);
  const [signupMode, setsignupMode] = useState('Buyer');

  const navigateScreen = () => {
    // setvisibale(false);
    // if (signupMode === 'Buyer') {
    //   navigation.navigate('Signup_1');
    // } else {
    //   navigation.navigate('Seller_Signup_1');
    // }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Please Select Account Type </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="Buyer"
            status={signupMode === 'Buyer' ? 'checked' : 'unchecked'}
            onPress={() => setsignupMode('Buyer')}
            color={white}
            uncheckedColor={gray}
          />
          <Text style={styles.buttonText}>Caller Mode</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="Seller"
            status={signupMode === 'Seller' ? 'checked' : 'unchecked'}
            onPress={() => setsignupMode('Seller')}
            color={white}
            uncheckedColor={gray}
          />
          <Text style={styles.buttonText}>Receiver Mode</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigateScreen()}
        style={styles.navButton}>
        <Text style={styles.buttonLabel}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup_Modal;
