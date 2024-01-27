// DomainForm.jsx

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Platform, Alert, Dimensions, Image } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_200ExtraLight, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const DomainForm = () => {
  const [domain, setDomain] = useState('');
  const [domainError, setDomainError] = useState('');
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleDomainChange = (text) => {
    setDomain(text);
    setDomainError(text.trim() === '' ? 'Domain is required' : '');
  };

  const handleNextPress = () => {
    if (domain.trim() === '') {
      Alert.alert('Error', 'Domain is required');
    } else {
      // Navigate to the next page (e.g., Login.jsx)
      navigation.navigate('LoginForm');
    }
  };

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,Poppins_200ExtraLight,Poppins_700Bold
  });

  // If the font is not yet loaded, return null or a loading indicator
  if (!fontsLoaded) {
    return null;
  }

 

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0.1 : 0}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Image style={styles.logoimg} source={require('../../assets/erplogo.jpeg')} />
      <View style={styles.form}>
        <Text style={styles.heading}>ERPNext </Text>
        <View style={styles.inputplace}>
          <TextInput
            style={[styles.input, domainError && styles.inputError]}
            placeholder="Enter your erp next url"
            onChangeText={handleDomainChange}
            value={domain}
          />
          {domainError !== '' && <Text style={styles.error}>{domainError}</Text>}
        </View>
        <TouchableOpacity onPress={handleNextPress} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  form: {
    backgroundColor: '#00A9FF',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    bottom: '5%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  heading: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    fontFamily: 'Poppins_400Regular',
  },

  inputError: {
    borderColor: 'red',
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#00A9FF',
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    
  },

  error: {
    color: '#ff6347',
  },

  inputplace: {
    marginBottom: 30,
  },

  logoimg: {
    marginBottom: 60,
    alignItems:'center',
    
    // marginRight:10,
    paddingHorizontal: 50,
    width:100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'transparent', // Set the background color to transparent
  },
  
});

export default DomainForm;
