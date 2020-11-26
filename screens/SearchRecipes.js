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
  FlatList,
  ImageBackground,
} from 'react-native';

class SearchRecipesScreen extends React.Component {

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
                              <Text style={styles.searchText}>Search Recipes</Text>
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
                          <Text style={styles.headerText}>NEWLY UPLOADED</Text>
                          <ScrollView horizontal>
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search1.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search2.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search3.jpg")}
                              />
                          </ScrollView>
                      </View>
                      <View style={styles.scroll}>
                          <Text style={styles.headerText}>FAN FAVOURITES</Text>
                          <ScrollView horizontal>
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search4.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search5.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search6.jpg")}
                              />
                          </ScrollView>
                      </View>
                      <View style={styles.scroll}>
                          <Text style={styles.headerText}>{"CHEF'S SELECTION"}</Text>
                          <ScrollView horizontal>
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search7.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search8.jpg")}
                              />
                              <Image
                                style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                                source={require("../images/search/search9.jpg")}
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
    marginHorizontal:18
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

export default SearchRecipesScreen;
