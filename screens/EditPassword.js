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

const EditPasswordScreen = ({navigation}) => {
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
               <View style={styles.inputView}>
                 <Text>{"Current Password:                 "}
                 <Text>**********</Text>
                 </Text>
               </View>
               <View style={styles.inputView}>
                 <Text>{"New Password:                      "}
                 <Text>**********</Text>
                 </Text>
               </View>
               <View style={styles.inputView}>
                 <Text>{"Confirm New Password:       "}
                 <Text>**********</Text>
                 </Text>
               </View>
               <TouchableOpacity
                 style={styles.editBtn}
                 onPress={() => {
                   navigation.navigate('Profile');
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

export {EditPasswordScreen};
