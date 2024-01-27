import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Platform, Alert, Dimensions,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular ,Poppins_200ExtraLight,Poppins_700Bold} from '@expo-google-fonts/poppins';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const { width, height } = Dimensions.get('window');

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,Poppins_200ExtraLight,Poppins_700Bold
  });

  // If the font is not yet loaded, return null or a loading indicator
  if (!fontsLoaded) {
    return null;
  }

  const handleUsernameChange = (text) => {
    setUsername(text);
    setUsernameError(text.length < 3 ? 'Username must be at least 3 characters' : '');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(text.length < 8 ? 'Password must be at least 8 characters' : '');
  };

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);

    if (username.length < 3 || password.length < 8) {
      Alert.alert('Error', 'Invalid username or password');
    } else {
      navigation.navigate('Profile');
    }
  };

  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0.1 : 0}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
            <Image style={styles.logoimg}
                source={require('../../assets/ifelse_1logo.png')}   
            
            />
      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputplace}>
        <TextInput
          style={[styles.input, usernameError && styles.inputError]}
          placeholder="username"
          onChangeText={handleUsernameChange} 

          value={username}
        />
        {usernameError !== '' && <Text style={styles.error}>{usernameError}</Text>}
        </View>

        <View style={styles.inputplace}>
 
        <TextInput
          style={[styles.input, passwordError && styles.inputError]}
          placeholder="password"
          secureTextEntry
          onChangeText={handlePasswordChange}
          value={password}
        />
        {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',                 //#00A9FF
    backgroundColor: 'white',
  },  

  form: {
    backgroundColor: '#00A9FF',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    bottom:'5%',
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
    fontFamily:'Poppins_400Regular'
  },

  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor:'white',
    fontFamily:'Poppins_400Regular'

    
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

  logoimg: {
    marginBottom:'10%', 
    
    width:150,
    resizeMode:'contain',
    
  },

  inputplace:{
    marginBottom:30
  }
});

export default LoginForm;