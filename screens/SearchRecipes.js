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
  let [searchParam, setSearchParam] = useState(route.params.searchParam);

  let [recipeData, setRecipeData] = useState({});

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image source={{ uri: item.recipe_imageUrl }} style={[styles.recipeImage]} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => { navigation.navigate('StartRecipe', { recipeData, recipeParam }); }}
      />
    );
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_recipe where recipe_title like ? and recipe_categories like ?',
        [`%${recipeParam}%`,`%${searchParam}%`],
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
    console.log("Search Recipe Data", recipeData)
    console.log("Search Recipe Param", recipeParam)
  }, []);

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
            <View style={styles.scroll}>
              <Text style={styles.headerText}>NEWLY UPLOADED</Text>
              <FlatList
                horizontal
                data={recipeData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
  },
  recipeImage: {
    height: 175,
    width: 175,
    padding: 5
  }
});

export default SearchRecipesScreen;
