import React from 'react';
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
  Alert,
  ImageBackground,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  const AccountCreatedAlert = () =>
    Alert.alert(
      "",
      "Your account has been created.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
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
         <View style={styles.inputView} >
           <TextInput
             style={styles.inputText}
             placeholder="Full Name"
             placeholderTextColor="lightgrey"
           />
         </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="lightgrey"
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="lightgrey"
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="lightgrey"
          />
        </View>

        <TouchableOpacity style={styles.registerBtn} onPress={AccountCreatedAlert}>
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

export { RegisterScreen };
