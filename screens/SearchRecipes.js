import React, { useState, useEffect } from 'react';
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
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'UserDatabase.db' });


const SearchRecipesScreen = ({ route, navigation }) => {

  let [recipeParam, setRecipeParam] = useState(route.params.recipeParam);
  let [recipeData, setRecipeData] = useState({});

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image source={{uri:item.recipe_imageUrl}} style={{height:50, width:50, padding:5}} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );


  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_recipe where recipe_title like ?',
        [`%${recipeParam}%`],
        (tx, results) => {
          let len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            let temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              temp.push(results.rows.item(i));
            }
            setRecipeData(temp);
          } else {
            alert('No recipes found');
          }
        },
      );
    });
  }, []);

  if (recipeParam === "chicken") {

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                <View style={styles.searchHeader}>
                  <Text style={styles.searchText}>Search Results for {recipeParam}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.scrollContainer}>
              <ScrollView>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>NEWLY UPLOADED</Text>
                  <ScrollView horizontal>
                    <TouchableOpacity onPress={() => { navigation.navigate('StartRecipe',{recipeData, recipeParam}); }}>
                      <Image
                        style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                        source={require("../images/dashboard/food8.jpg")}
                      />
                    </TouchableOpacity>
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
                  <Text style={styles.headerText}>CHEF'S SELECTION</Text>
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

  if (recipeParam === "broccoli") {

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                <View style={styles.searchHeader}>
                  <Text style={styles.searchText}>Search Results for {recipeParam}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.scrollContainer}>
              <ScrollView>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>NEWLY UPLOADED</Text>
                  <ScrollView horizontal>
                    <TouchableOpacity onPress={() => { navigation.navigate('StartRecipe',{recipeData, recipeParam}); }}>
                      <Image
                        style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                        source={require("../images/dashboard/broccoli.jpg")}
                      />
                    </TouchableOpacity>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli2.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli3.jpg")}
                    />
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>FAN FAVOURITES</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli4.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli5.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli6.jpg")}
                    />
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>CHEF'S SELECTION</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/broccoli7.jpg")}
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
  if (recipeParam === "salmon") {

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                <View style={styles.searchHeader}>
                  <Text style={styles.searchText}>Search Results for {recipeParam}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.scrollContainer}>
              <ScrollView>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>NEWLY UPLOADED</Text>
                  <ScrollView horizontal>
                    <TouchableOpacity onPress={() => { navigation.navigate('StartRecipe', {recipeData, recipeParam}); }}>
                      <Image
                        style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                        source={require("../images/dashboard/salmon.jpg")}
                      />
                    </TouchableOpacity>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/salmon1.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/salmon2.jpg")}
                    />
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>FAN FAVOURITES</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/salmon3.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/salmon4.jpg")}
                    />
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>CHEF'S SELECTION</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/salmon5.jpg")}
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

   if (recipeParam === "steak") {

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require("../images/background/light-wood.jpg")} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <ImageBackground source={require("../images/background/dark-wood.jpg")} style={styles.image}>
                <View style={styles.searchHeader}>
                  <Text style={styles.searchText}>Search Results for {recipeParam}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.scrollContainer}>
              <ScrollView>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>NEWLY UPLOADED</Text>
                  <ScrollView horizontal>
                    <TouchableOpacity onPress={() => { navigation.navigate('StartRecipe',{recipeData, recipeParam}); }}>
                      <Image
                        style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                        source={require("../images/dashboard/steak.jpg")}
                      />
                    </TouchableOpacity>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/steak2.jpg")}
                    />
                    
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>FAN FAVOURITES</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/steak3.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/steak4.jpg")}
                    />
                  </ScrollView>
                </View>
                <View style={styles.scroll}>
                  <Text style={styles.headerText}>CHEF'S SELECTION</Text>
                  <ScrollView horizontal>
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/steak5.jpg")}
                    />
                    <Image
                      style={{ width: 175, height: 175, marginBottom: 20, marginRight: 20 }}
                      source={require("../images/search/steak6.jpg")}
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
}

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
    width: "100%",
    flex: 1,
  },
  searchHeader: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flex: 3,
    marginHorizontal: 18
  },
  scroll: {
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  headerText: {
    height: 20,
    fontWeight: 'bold',
  },
  item:{
    width: 175, 
    height: 175,
    marginBottom: 20, 
    marginRight: 20
  }
});

export default SearchRecipesScreen;
