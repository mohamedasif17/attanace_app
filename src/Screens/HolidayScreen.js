// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HolidayScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Holiday</Text>
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

export default HolidayScreen;
