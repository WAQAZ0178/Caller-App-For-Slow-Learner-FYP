import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import styles from './otp-input-styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {black, theme, theme2, white} from '../../Global/Styles/Theme';
import {wp, hp} from '../../Global/Styles/Scalling';

const CELL_COUNT = 6;

const OtpInput = ({value, setValue}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[
            {...styles.cell, color: white, backgroundColor: white},
            (isFocused || symbol) && styles.focusCell,
          ]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};
export default OtpInput;
