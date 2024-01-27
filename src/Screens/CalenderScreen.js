// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalenderScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Calender Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalenderScreen;
