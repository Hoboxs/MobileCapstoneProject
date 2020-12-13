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
import Icon from 'react-native-vector-icons/FontAwesome';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const StartRecipeScreen = ({ route, navigation }) => {

    let [recipeData,setRecipeData] = useState(route.params.recipeData);
    let [recipeParam,setRecipeParam] = useState(route.params.recipeParam);

    let save_favorite = () => {
      console.log("recipeData: ", recipeData[0].recipe_id);

      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO table_userFavorites (user_id, recipe_id) VALUES (?,?)',
          [global.id, recipeData[0].recipe_id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected < 1) {
              alert('Failed');
            }else{
              alert('Not Failed');
            }
          }
        );
      });
    };

    let listRecipeItemView = (item) => {
        return (
          <View
            key={item.recipe_id}
            style={{ padding: 20 }}>
            <Text>Level: {item.recipe_level}</Text>
            <Text>Cook Time: {item.recipe_cookTime}</Text>
            <Text>Ingredients: {item.recipe_ingredients}</Text>
            <Text>Directions: {item.recipe_description}</Text>
          </View>
        );
      };

      let listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '100%',
            }}
          />
        );
      };

    if(recipeParam === "chicken")

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={require("../images/dashboard/food8.jpg")} style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.RectangleShapeView}>
                <Text style={styles.recipeTitleText}>Perfect Roast Chicken</Text>
                </View>
                <TouchableOpacity style={styles.favBtn} onPress = {() => {save_favorite()}}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <FlatList
                  data={recipeData}
                  ItemSeparatorComponent={listViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => listRecipeItemView(item)}
                />
        </View>
    );
    if(recipeParam === "broccoli")

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={require("../images/dashboard/broccoli.jpg")} style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.RectangleShapeView}>
                <Text style={styles.recipeTitleText}>Garlic Broccoli</Text>
                </View>
                <TouchableOpacity style={styles.favBtn} onPress = {() => {save_favorite()}}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <FlatList
                  data={recipeData}
                  ItemSeparatorComponent={listViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => listRecipeItemView(item)}
                />
        </View>
    );
    if(recipeParam === "steak")

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={require("../images/dashboard/food8.jpg")} style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.RectangleShapeView}>
                <Text style={styles.recipeTitleText}>Stove-top Steak</Text>
                </View>
                <TouchableOpacity style={styles.favBtn} onPress = {() => {save_favorite()}}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <FlatList
                  data={recipeData}
                  ItemSeparatorComponent={listViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => listRecipeItemView(item)}
                />
        </View>
    );
    if(recipeParam === "salmon")

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={require("../images/dashboard/salmon.jpg")} style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.RectangleShapeView}>
                <Text style={styles.recipeTitleText}>Honey Garlic Salmon</Text>
                </View>
                <TouchableOpacity style={styles.favBtn} onPress = {() => {save_favorite()}}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <FlatList
                  data={recipeData}
                  ItemSeparatorComponent={listViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => listRecipeItemView(item)}
                />
        </View>
    );
  };

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    imageContainer: {
        width: "100%",
        flex: 2,
    },
    scrollContainer: {
        flex: 3,
        marginHorizontal:18
    },

    headerText: {
        height: 20,
        fontWeight: 'bold',
    },
    RectangleShapeView: {

        marginTop: -30,
        marginBottom: 25,
        width: 120 * 1.9,
        height: 85,
        backgroundColor: "#7C9262",
    },
    recipeTitleText: {
        textAlign: 'center',
        marginTop: 26,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    infoText: {
        fontWeight: 'bold',
    },
    infoText2:{
        fontSize: 16
    },
    h2Text:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom:5
    },
    favBtn:{
      position: 'absolute',
      top: 20,
      left: 330,
      width: 40,
      height: 40,
    },
});

export default StartRecipeScreen;
