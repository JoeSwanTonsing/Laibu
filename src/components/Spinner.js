import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const Spinner = ({size, color, spinnerText}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color} />
      <Text style={styles.spinnerText}>{spinnerText}</Text>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyItems: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    marginTop: 10,
    color: '#53599A',
  },
};

export default Spinner;
