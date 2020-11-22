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

class Login extends React.Component {

  constructor({navigation}) {
    super();
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    }
  }

  onSubmit(){
    this.emailValidator();
    this.passwordValidator();
    if(this.emailValidator() && this.passwordValidator()){
      this.props.navigation.navigate('Dashboard');
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

  passwordValidator(){
    if(this.state.password==""){
      this.setState({passwordError:"Enter a Valid Password"})
    } else{
      this.setState({passwordError:""})
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
          <Text style={{color: 'red', fontWeight: 'bold'}}>{this.state.passwordError}</Text>
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
          <TouchableOpacity style={styles.loginBtn}
            onPress = {() => this.onSubmit()}>
            <Text style={styles.loginText}>
              LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={()=>{
              this.props.navigation.navigate('ForgotPassword');
              }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}> {"Don't have an account? "}
            <Text style={styles.signupText} onPress={()=>{
              this.props.navigation.navigate('Register');
              }}>
            Sign Up</Text>
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
  },
  errorText:{
    alignItems:"center",
  }
});

export default Login;
