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

const SearchParametersScreen = ({ navigation }) => {
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
              <Text style={styles.category}>DIET</Text>
              <View style={styles.categories}>
                <View style={styles.myButton}>
                  <Text>Vegan</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Vegetarian</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Pescatarian</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Plaeo</Text>
                </View>
              </View>
              <View style={styles.categories}>
                <View style={styles.myButton}>
                  <Text>Low-carb</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Healthy</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Gluten-free</Text>
                </View>
                <View style={styles.myButton}>
                  <Text>Dairy-free</Text>
                </View>
              </View>
              
              <Text style={styles.category}>CUISINE</Text>
              <Text style={styles.category}>DIFFICULTY</Text>
              <Text style={styles.category}>COST</Text>
              <Text style={styles.category}>TIME</Text>


            </ ScrollView>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flex: 3,
    marginHorizontal: 25,
  },

  scroll: {
    width: "100%",
    height: 200,
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
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15
  },
  categories: {
    flexDirection: 'row',
  },
  myButton: {
    padding: 6,
    borderRadius: 17,
    backgroundColor: "#7C9262",
    marginLeft: 5,
    marginTop: 5
  }

});

export { SearchParametersScreen };
