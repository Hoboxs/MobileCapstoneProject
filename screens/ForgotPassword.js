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
  Alert,
  Platform,
} from 'react-native';

class ForgotPasswordScreen extends React.Component {

  constructor({navigation}) {
    super();
    this.state = {
      email: '',
      emailError: '',
    }
  }

  onSubmit(){
    this.emailValidator();
    if(this.emailValidator()){
      Alert.alert(
        "",
        "Please check your email for password reset instructions.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      this.props.navigation.navigate('Login');
    }
  }

  emailValidator(){
    if(this.state.email==""){
      this.setState({emailError:"Enter a Valid Email"})
    } else if(this.state.email.indexOf('@') == -1 ){
      this.setState({emailError:"Enter a Valid Email"})
    } else{
      this.setState({emailError:""})
      return true;
    }
    return false;
  }

  render() {
   return (
     <View style={styles.backgroundContainer}>
      <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
     <View style={styles.container}>
         <Image
           style={{ width: 313.5, height: 232.5, marginBottom: 20 }}
           source={require("../images/bitstobiteslogo.png")}
         />
         <View style={styles.errorText}>
           <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.emailError}</Text>
         </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            onBlur={()=>this.emailValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {this.setState({email: text})}}
          />
        </View>
        <TouchableOpacity onPress={() => this.onSubmit()} style={styles.registerBtn} >
          <Text style={styles.registerText}>SEND EMAIL</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      </View>
  );
}
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
});

export default ForgotPasswordScreen;
