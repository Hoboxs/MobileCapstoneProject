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
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const FavoritesScreen = ({ route, navigation }) => {

  let [recipeParam, setRecipeParam] = useState();
  let [recipeData, setRecipeData] = useState({});
  let [favKey, setFavKey] = useState();

  const Item = ({ item, onPress }) => (
      <TouchableOpacity onPress={ onPress } style={styles.item}>
        <Image source={{ uri: item.recipe_imageUrl }} style={styles.recipeImage} />
      </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => { navigation.navigate('StartRecipe', { item }); }}
        />
      );
    };

  const test = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_userFavorites WHERE user_id = ?',
        [global.id],
        (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            let temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              temp.push(results.rows.item(i).recipe_id);
            }
            setFavKey(temp);
          } else {
            alert('No favorites found');
          }
        },
      );
    });
    test2();
  };

  const test2 = () => {
    db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM table_recipe where recipe_id = ?',
          [favKey.[0]],
          (tx, results) => {
            let len = results.rows.length;
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

  };

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
          <TouchableOpacity style={styles.Btn} onPress={() => test()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
          <View style={styles.scrollContainer}>
            <View style={styles.scroll}>
              <FlatList
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
 },
 Btn:{
   width:"80%",
   backgroundColor:"#7C9262",
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginBottom:10,
   marginTop:10
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

export default FavoritesScreen;
