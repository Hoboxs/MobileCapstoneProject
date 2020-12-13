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

const StartRecipeScreen = ({ route, navigation }) => {

    let [recipeData,setRecipeData] = useState(route.params.recipeData);
    let [recipeItem,setRecipeItem] = useState(route.params.item);
    let [recipeParam, setRecipeParam] = useState(route.params.recipeParam);

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
                <Icon name="heart" size={40} color="red" style={{ position: 'absolute', top: 20, left: 330 }}/>
            </View>
            <Text>{recipeItem.recipe_level}</Text>
            <Text>{recipeItem.recipe_cookTime}</Text>
            <Text>{recipeItem.recipe_ingredients}</Text>
            <Text>{recipeItem.recipe_description}</Text>
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
});

export default StartRecipeScreen;
