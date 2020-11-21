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
  Alert
} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {
  const ResetInfoAlert = () =>
    Alert.alert(
      "",
      "Please Check your email for password reset instructions.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

   return (
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

        <TouchableOpacity onPress={ResetInfoAlert} style={styles.registerBtn} >
          <Text style={styles.registerText}>SEND EMAIL</Text>
        </TouchableOpacity>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
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
});

export { ForgotPasswordScreen };
