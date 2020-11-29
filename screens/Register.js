import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  Platform,
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const RegisterScreen = ({ navigation }) => {

  let [fullName, setFullName] = useState('');
  let [fullNameError, setFullNameError] = useState('');
  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [password, setPassword] = useState('');
  let [passwordError, setPasswordError] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [confirmPasswordError, setConfirmPasswordError] = useState('');


  let register_user = () => {
    console.log(fullName, email, password);

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_email, user_password) VALUES (?,?,?)',
        [fullName, email, password],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Login'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  let onSubmit = () => {
    fullNameValidator();
    emailValidator();
    passwordValidator();
    confirmPasswordValidator();
    if(fullNameValidator() && emailValidator() && passwordValidator() && confirmPasswordValidator()){
      /*
      Alert.alert(
        "",
        "Your account has been created.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      this.props.navigation.navigate('Login');
      */
      register_user();
    }
  };

  let fullNameValidator = () => {
    if(fullName==""){
      setFullNameError("Enter a Valid Full Name");
    } else{
      setFullNameError("");
      return true;
    }
    return false;
  };

  let emailValidator = () => {
    if(email==""){
      setEmailError("Enter a Valid Email");
    } else if(email.indexOf('@') == -1 ){
      setEmailError("Enter a Valid Email");
    } else{
      setEmailError("");
      return true;
    }
    return false;
  };

  let passwordValidator = () => {
    if(password==""){
      setPasswordError("Enter a Valid Password");
    } else{
      setPasswordError("");
      return true;
    }
    return false;
  };

  let confirmPasswordValidator = () => {
    if(confirmPassword==""){
      setConfirmPasswordError("Enter a Valid Password");
    } else if(password != confirmPassword){
      setConfirmPasswordError("Passwords Must Match");
    }else{
      setConfirmPasswordError("");
      return true;
    }
    return false;
  };

   return (
     <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
     <View style={styles.container}>
         <View style={styles.headerView}>
           <Text style={styles.header1Text}>
             Welcome to Bits to Bits!
           </Text>
           <Text style={styles.header2Text}>
             Let us help you prepare your next meal.
           </Text>
         </View>
         <View style={styles.errorText}>
           <Text style={{color: 'red', fontWeight: 'bold'}}>{fullNameError}</Text>
         </View>
         <View style={styles.inputView} >
           <TextInput
             style={styles.inputText}
             placeholder="Full Name"
             onBlur={()=>fullNameValidator()}
             placeholderTextColor="lightgrey"
             onChangeText={(text) => {setFullName(text)}}
           />
         </View>
         <View style={styles.errorText}>
           <Text style={{color: 'red', fontWeight: 'bold'}}>{emailError}</Text>
         </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            onBlur={()=>emailValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {setEmail(text)}}
          />
        </View>
        <View style={styles.errorText}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{passwordError}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            onBlur={()=>passwordValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {setPassword(text)}}
          />
        </View>
        <View style={styles.errorText}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{confirmPasswordError}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            onBlur={()=>confirmPasswordValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {setConfirmPassword(text)}}
          />
        </View>

        <TouchableOpacity style={styles.registerBtn} onPress={() => onSubmit()}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}> {"Already have an account? "}
          <Text style={styles.signupText} onPress={()=>{
            navigation.navigate('Login');
            }}>
          Sign In</Text>
        </Text>
        </View>
      </ImageBackground>
      </View>
  );
};


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  registerBtn:{
    width:"80%",
    backgroundColor:"#7C9262",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20
  },
  registerText:{
    color:"white"
  },
  headerView:{
    width:"100%",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  header1Text:{
    textAlign: 'center',
    marginBottom:20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  header2Text:{
    textAlign: 'center',
    marginBottom:20,
    fontSize: 16,
  },
  signupText:{
    color:"red"
  }
});

export default RegisterScreen;
