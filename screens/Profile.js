import React, {useState, useEffect} from 'react';
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

const ProfileScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
          setFullName(global.name);
          setEmail(global.email);
        });

        return () => {
          unsubscribe;
        };
    })

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
             <View style={styles.searchContainer}>
                 <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                     <View style={styles.searchHeader}>
                         <Text style={styles.searchText}>Profile</Text>
                     </View>
                 </ImageBackground>
             </View>
             <View style={styles.profileContainer}>
              <View style={styles.scroll}>
                 <View style={styles.inputView}>
                   <Text>{"Full Name:                               "}
                   <Text>{fullName}</Text>
                   </Text>
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => {
                     navigation.navigate('EditName');
                   }}>
                   <Text style={styles.logoutText}>Edit Name</Text>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                   <Text>{"Email:                  "}
                   <Text>{global.email}</Text>
                   </Text>
                 </View>
                 <TouchableOpacity
                   style={styles.editBtn}
                   onPress={() => {
                     navigation.navigate('EditEmail');
                   }}>
                   <Text style={styles.logoutText}>Edit Email</Text>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                   <Text>{"Password:                               "}
                   <Text>{global.password}</Text>
                   </Text>
                </View>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => {
                    navigation.navigate('EditPassword');
                  }}>
                  <Text style={styles.logoutText}>Edit Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.logoutBtn}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text style={styles.logoutText}>LOG OUT</Text>
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

export default ProfileScreen;
