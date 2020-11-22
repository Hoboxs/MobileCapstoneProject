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

class Register extends React.Component {

  constructor({navigation}) {
    super();
    this.state = {
      fullName: '',
      fullNameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
    }
  }

  onSubmit(){
    if(this.state.fullName != "" && this.state.email != "" && this.state.password != "" && this.state.confrimPassword != ""){
      Alert.alert(
        "",
        "Your account has been created.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      this.props.navigation.navigate('Login');
    }
  }

  fullNameValidator(){
    if(this.state.fullName==""){
      this.setState({fullNameError:"Enter a Valid Full Name"})
    } else{
      this.setState({fullNameError:""})
    }
  }

  emailValidator(){
    if(this.state.email==""){
      this.setState({emailError:"Enter a Valid Email"})
    } else{
      this.setState({emailError:""})
    }
  }

  passwordValidator(){
    if(this.state.password==""){
      this.setState({passwordError:"Enter a Valid Password"})
    } else{
      this.setState({passwordError:""})
    }
  }

  confirmPasswordValidator(){
    if(this.state.confirmPassword==""){
      this.setState({confirmPasswordError:"Enter a Valid Password"})
    } else{
      this.setState({confirmPasswordError:""})
    }
  }

  render() {
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
           <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.fullNameError}</Text>
         </View>
         <View style={styles.inputView} >
           <TextInput
             style={styles.inputText}
             placeholder="Full Name"
             onBlur={()=>this.fullNameValidator()}
             placeholderTextColor="lightgrey"
             onChangeText={(text) => {this.setState({fullName: text})}}
           />
         </View>
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
        <View style={styles.errorText}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.passwordError}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            onBlur={()=>this.passwordValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {this.setState({password: text})}}
          />
        </View>
        <View style={styles.errorText}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.confirmPasswordError}</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password"
            onBlur={()=>this.confirmPasswordValidator()}
            placeholderTextColor="lightgrey"
            onChangeText={(text) => {this.setState({confirmPassword: text})}}
          />
        </View>

        <TouchableOpacity style={styles.registerBtn} onPress={() => this.onSubmit()}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}> {"Already have an account? "}
          <Text style={styles.signupText} onPress={()=>{
            this.props.navigation.navigate('Login');
            }}>
          Sign In</Text>
        </Text>
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

export default Register;
