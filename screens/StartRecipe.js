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
    let [recipeItem,setRecipeItem] = useState(route.params.item);
    let [recipeParam, setRecipeParam] = useState(route.params.recipeParam);

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


    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={{uri: recipeItem.recipe_imageUrl}} style={styles.image}>
                    </ImageBackground>
                </View>
                <View style={styles.RectangleShapeView}>
                <Text style={styles.recipeTitleText}>{recipeItem.recipe_title}</Text>
                </View>
                <TouchableOpacity style={styles.favBtn} onPress = {() => {save_favorite()}}>
                  <Icon name="heart" size={40} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                        <Text style={styles.infoText2}>
                            Level:
                                <Text style={styles.infoText}>{recipeItem.recipe_level}</Text>
                        </Text>
                        <Text style={styles.infoText2}>
                            Total:
                                <Text style={styles.infoText}>{recipeItem.recipe_cookTime}</Text>
                        </Text>
                        <Text style={styles.h2Text}>
                            Ingredients:
                        </Text>
                        <Text>
                        {recipeItem.recipe_ingredients}
                        </Text>
                        <Text style={styles.h2Text}>
                            Directions:
                        </Text>
                        <Text>
                        {recipeItem.recipe_description}
                        </Text>
                </ ScrollView>
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
