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
import { color } from 'react-native-reanimated';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const LoginScreen = ({ navigation }) => {

  let [email, setEmail] = useState('');
  let [emailError, setEmailError] = useState('');
  let [password, setPassword] = useState('');
  let [passwordError, setPasswordError] = useState('');

  let searchUser = () => {
    console.log(email, password);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_email = ? AND user_password = ?',
        [email, password],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            global.name = results.rows.item(0).user_name;
            global.email = results.rows.item(0).user_email;
            global.password = results.rows.item(0).user_password;
            global.id = results.rows.item(0).user_id;
            navigation.navigate('Dashboard');
          } else {
            alert('No user found');
          }
        }
      );
    });
  };

  let onSubmit = () => {
    emailValidator();
    passwordValidator();
    if(emailValidator() && passwordValidator()){
      searchUser();
    }
  }

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

   return (
     <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Image
            style={{ width: 313.5, height: 232.5, marginBottom: 20 }}
            source={require("../images/bitstobiteslogo.png")}
          />
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
          <Text style={{color: 'red', fontWeight: 'bold'}}>{passwordError}</Text>
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
          <TouchableOpacity style={styles.loginBtn}
            onPress = {() => onSubmit()}>
            <Text style={styles.loginText}>
              Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={()=>{
              navigation.navigate('ForgotPassword');
              }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.signupText1}> {"Don't have an account? "}
            <Text style={styles.signupText} onPress={()=>{
              navigation.navigate('Register');
              }}>
            Sign Up</Text>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
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
    color:"black",
    textAlign: 'center',
    fontSize:17
  },
  forgot:{
    color:"black",
    fontSize:15,
    marginBottom:30
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#7C9262",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  loginText:{
    fontSize: 17,
    color: "white",
  },
  signupText:{
    color:"red"
  },
  signupText1:{
    color: "black",
    fontSize:17
  },
  errorText:{
    alignItems:"center",
  }
});

export default LoginScreen;
