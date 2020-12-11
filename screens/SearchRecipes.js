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
  let [recipeData, setRecipeData] = useState([]);


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

  let listRecipeItemView = (item) => {
    return (
      <View
        key={item.recipe_id}
        style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Id: {item.recipe_id}</Text>
        <Text>Title: {item.recipe_title}</Text>
        <Text>Level: {item.recipe_level}</Text>
        <Text>Cook Time: {item.recipe_cookTime}</Text>
        <Text>Ingredients: {item.recipe_ingredients}</Text>
        <Text>Directions: {item.recipe_description}</Text>
        <Text>Image URL: {item.recipe_imageUrl}</Text>
      </View>
    );
  };

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080',
        }}
      />
    );
  };

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
                <FlatList
                  data={recipeData}
                  ItemSeparatorComponent={listViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => listRecipeItemView(item)}
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
  }
});

export default SearchRecipesScreen;
