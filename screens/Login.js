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
  ImageBackground,
} from 'react-native';

const LoginScreen = ({navigation}) => {
   return (
     <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
        <View style={styles.container}>
          <Image
            style={{ width: 313.5, height: 232.5, marginBottom: 20 }}
            source={require("../images/bitstobiteslogo.png")}
          />
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

          <TouchableOpacity style={styles.loginBtn} onPress={()=>{
            navigation.navigate('Dashboard');
            }}>
            <Text style={styles.loginText} >
              LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={()=>{
              navigation.navigate('ForgotPassword');
              }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}> {"Don't have an account? "}
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
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11,
    marginBottom:20
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
    color:"black"
  },
  signupText:{
    color:"red"
  }
});

export { LoginScreen };
