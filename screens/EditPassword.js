import React, {useState} from 'react';
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
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const EditPasswordScreen = ({ navigation }) => {

  let [oldPassword, setOldPassword] = useState(global.password);
  let [oldPasswordError, setOldPasswordError] = useState('');
  let [newPassword, setNewPassword] = useState('');
  let [newPasswordError, setNewPasswordError] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [confirmPasswordError, setConfirmPasswordError] = useState('');

  let updateUser = () => {
    db.transaction((tx) => {

      tx.executeSql(
        'SELECT * FROM table_user where user_email = ? AND user_password = ?',
        [global.email, oldPassword],
        (tx, results) => {
          console.log(results.rows.length);
          console.log("password", oldPassword)
          if (results.rows.length > 0) {
            tx.executeSql(
              'UPDATE table_user set user_password=? where user_id=?',
              [newPassword, global.id],
              (tx, results) => {

                global.password = newPassword;
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'Password updated successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => navigation.navigate('Profile'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else alert('Updation Failed');
              }
            );
          } else {
            alert('Incorrect password');
          }
        }
      );

    });
  };

  let onSubmit = () => {
    oldPasswordValidator();
    newPasswordValidator();
    confirmPasswordValidator();
    if(oldPasswordValidator() && newPasswordValidator() && confirmPasswordValidator()){
      updateUser();
    }
  };

  let oldPasswordValidator = () => {
    if(oldPassword==""){
      setOldPasswordError("Enter a Valid Password");
    } else{
      setOldPasswordError("");
      return true;
    }
    return false;
  };

  let newPasswordValidator = () => {
    if(newPassword==""){
      setNewPasswordError("Enter a Valid Password");
    } else{
      setNewPasswordError("");
      return true;
    }
    return false;
  };

  let confirmPasswordValidator = () => {
    if(confirmPassword==""){
      setConfirmPasswordError("Enter a Valid Password");
    } else if(newPassword != confirmPassword){
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
             <View style={styles.searchContainer}>
                 <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                     <View style={styles.searchHeader}>
                         <Text style={styles.searchText}>Edit Password</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                <View>
                  <Text style={{color: 'red', fontWeight: 'bold'}}>{oldPasswordError}</Text>
                </View>
                  <Text>Current Password: </Text>
                 <View style={styles.inputView}>
                   <TextInput
                     style={styles.inputText}
                     secureTextEntry
                     placeholder="Old Password"
                     onBlur={()=>oldPasswordValidator()}
                     placeholderTextColor="lightgrey"
                     onChangeText={text => setOldPassword(text)}
                     value={oldPassword}
                   />
                 </View>
                 <View>
                   <Text style={{color: 'red', fontWeight: 'bold'}}>{newPasswordError}</Text>
                 </View>
                 <Text>New Password:</Text>
                 <View style={styles.inputView}>
                   <TextInput
                     style={styles.inputText}
                     secureTextEntry
                     placeholder="New Password"
                     onBlur={()=>newPasswordValidator()}
                     placeholderTextColor="lightgrey"
                     onChangeText={text => setNewPassword(text)}
                     value={newPassword}
                   />
                 </View>
                 <View>
                   <Text style={{color: 'red', fontWeight: 'bold'}}>{confirmPasswordError}</Text>
                 </View>
                 <Text>Confirm New Password:</Text>
                 <View style={styles.inputView}>
                   <TextInput
                     style={styles.inputText}
                     secureTextEntry
                     placeholder="Confirm Password"
                     onBlur={()=>confirmPasswordValidator()}
                     placeholderTextColor="lightgrey"
                     onChangeText={text => setConfirmPassword(text)}
                     value={confirmPassword}
                   />
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => onSubmit()}>
                   <Text style={styles.logoutText}>SAVE</Text>
                 </TouchableOpacity>
            </View>
            </View>
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
  searchContainer: {
    width:"100%",
    flex: 1,
  },
  searchHeader: {
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    textAlign: 'center',
    marginBottom:20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    flex: 6,
    width:"100%",
    justifyContent:"center",
    alignItems: 'center',
  },
  scroll: {
    width:"100%",
    height:200,
    marginBottom:20,
    justifyContent:"center",
    alignItems: 'center',
    padding:20
  },
  inputContainer: {
    width:"100%",
    height:200,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  logoutBtn: {
    width: '80%',
    backgroundColor: '#7C9262',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  editBtn: {
    width: '30%',
    backgroundColor: '#7C9262',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: 'white',
  },
});

export default EditPasswordScreen;
