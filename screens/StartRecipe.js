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
import Icon from 'react-native-vector-icons/FontAwesome';

class StartRecipeScreen extends React.Component {

  constructor({navigation}) {
    super();
  }

  render() {
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
                <Icon name="heart" size={40} color="red" style={{ position: 'absolute', top: 20, left: 330 }}/>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView>
                        <Text style={styles.infoText2}>
                            Level:
                                <Text style={styles.infoText}> Intermidiate</Text>
                        </Text>
                        <Text style={styles.infoText2}>
                            Total:
                                <Text style={styles.infoText}> 1h 40 min</Text>
                        </Text>
                        <Text style={styles.h2Text}>
                            Ingredients:
                        </Text>
                        <Text>
                            1 (3 pound) whole chicken, giblets removed
                            {'\n'}
                            salt and black pepper to taste
                            {'\n'}
                            1 tablespoon onion powder
                            {'\n'}
                            1/2 cup margarine, divided
                            {'\n'}
                            1 stalk celery, leaves removed
                        </Text>
                        <Text style={styles.h2Text}>
                            Directions:
                        </Text>
                        <Text>
                            <Icon name="check" size={18} color="#7C9262"/>
                            {" "} Preheat oven to 350 degrees F (175 degrees C).
                            {'\n'}
                        </Text>
                        <Text>
                            <Icon name="check" size={18} color="#7C9262"/>
                             {" "} Place chicken in a roasting pan, and season generously
                             inside and out with salt and pepper. Sprinkle inside and
                             out with onion powder. Place 3 tablespoons margarine
                             in the chicken cavity. Arrange dollops of the remaining
                             margarine around the chicken's exterior.Cut the celery
                             into 3 or 4 pieces, and place in the chicken cavity.
                             {'\n'}

                        </Text>
                        <Text>
                             <Icon name="check" size={18} color="#7C9262"/>
                             {" "} Bake uncovered 1 hour and 15 minutes in the preheated
                             oven, to a minimum internal temperature of 180 degrees
                             F (82 degrees C). Remove from heat, and baste with
                             melted margarine and drippings. Cover with aluminum
                             foil, and allow to rest about 30 minutes before serving
                             {'\n'}
                        </Text>
                </ ScrollView>
            </View>
        </View>
    );
  }
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
