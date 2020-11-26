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

class FavoritesScreen extends React.Component {

  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
         <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
             <View style={styles.container}>
                 <View style={styles.searchContainer}>
                     <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                         <View style={styles.searchHeader}>
                             <Text style={styles.searchText}>Favourites</Text>
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
             <View style={styles.scrollContainer}>
                 <ScrollView>
                     <View style={styles.scroll}>
                         <Text style={styles.headerText}>RECENTLY MADE</Text>
                         <ScrollView horizontal>
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav1.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav2.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav3.jpg")}
                             />
                         </ScrollView>
                     </View>
                     <View style={styles.scroll}>
                         <Text style={styles.headerText}>VEGAN FAVOURITES</Text>
                         <ScrollView horizontal>
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav4.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav5.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav6.jpg")}
                             />
                         </ScrollView>
                     </View>
                     <View style={styles.scroll}>
                         <Text style={styles.headerText}>GLUTEN-FREE FAVOURITES</Text>
                         <ScrollView horizontal>
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav7.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav8.jpg")}
                             />
                             <Image
                               style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                               source={require("../images/favourites/fav9.jpg")}
                             />
                         </ScrollView>
                     </View>
                 </ ScrollView>
             </View>
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
 scrollContainer: {
   flex: 3,
 },
 scroll: {
   width:"100%",
   height:200,
   marginBottom:20,
   justifyContent:"center",
   padding:20
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
 headerText: {
   height:20,
   fontWeight: 'bold',
 }
});

export default FavoritesScreen;
