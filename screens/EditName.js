import React, { useState } from 'react';
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

const EditNameScreen = ({ navigation }) => {

    let [fullName, setFullName] = useState(global.name);
    let [fullNameError, setFullNameError] = useState('');

    let updateUser = () => {
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE table_user set user_name=? where user_id=?',
          [fullName, global.id],
          (tx, results) => {
            global.name = fullName;
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Name updated successfully',
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
      });
    };

    let onSubmit = () => {
      fullNameValidator();
      if(fullNameValidator()){
        updateUser();
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


    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require('../images/background/light-wood.jpg')}
          style={styles.image}>
          <View style={styles.container}>
             <View style={styles.searchContainer}>
                 <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                     <View style={styles.searchHeader}>
                         <Text style={styles.searchText}>Edit Name</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                  <View>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>{fullNameError}</Text>
                  </View>
                  <Text>Full Name:</Text>

                 <View style={styles.inputView}>

                   <TextInput
                     style={styles.inputText}
                     placeholder="Full Name"
                     onBlur={()=>fullNameValidator()}
                     placeholderTextColor="lightgrey"
                     onChangeText={text => setFullName(text)}
                     value={fullName}
                   />

                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => onSubmit() }>
                   <Text style={styles.logoutText}>SAVE</Text>
                 </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                <View style={styles.inputView}>
                  <Text>
                    {'Full Name:                               '}
                    <Text>{global.name}</Text>
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => {
                    this.props.navigation.navigate('Profile');
                  }}>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    width: '100%',
    flex: 1,
  },
  searchHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    flex: 6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
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

export default EditNameScreen;
