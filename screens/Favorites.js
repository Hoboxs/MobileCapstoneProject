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

/* https://www.npmjs.com/package/react-native-dropdown-picker */
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const FavoritesScreen = ({navigation}) => {

   return (
     <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                        <View style={styles.searchHeader}>
                            <Text style={styles.searchText}>Discover</Text>
                            <View style={styles.inputView} >
                                <TextInput
                                  style={styles.inputText}
                                  placeholder="Search"
                                  placeholderTextColor="lightgrey"
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.pantryContainer}>

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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
  pantryContainer: {
    flex: 3,
  },
});

export { FavoritesScreen };
