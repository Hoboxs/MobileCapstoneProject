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
import { TouchableHighlight } from 'react-native-gesture-handler';

const SearchParametersScreen = ({ route, navigation }) => {

  let [recipeParam, setRecipeParam] = useState(route.params.obj);
  const [selectedId, setSelectedId] = useState(null);
  let [searchParam, setSearchParam] = useState("");

  const diet = [
    {id: "1", title: "vegan"}, 
    {id: "2", title: "vegetarian"}, 
    {id: "3", title: "pescatarian"}, 
    {id: "4", title: "paleo"}, 
    {id: "5", title: "low-carb"}, 
    {id: "6", title: "healthy"}, 
    {id: "7", title: "gluten-free"}, 
    {id: "8", title: "dairy-free"}
  ];
  const cuisine = [
    {id: "9", title: "french"}, 
    {id: "10", title: "italian"}, 
    {id: "11", title: "mexican"}, 
    {id: "12", title: "thai"}, 
    {id: "13", title: "indian"}, 
    {id: "14", title: "chinese"}, 
    {id: "15", title: "caribbean"},
    {id: "17", title: "greek"}, 
    {id: "18", title: "japanese"}
  ];
  const difficulty = [
    {id: "19", title: "expert"}, 
    {id: "20", title: "novice"}, 
    {id: "21", title: "intermediate"}
  ];
  const cost = [
    {id: "22", title: "under $30"}, 
    {id: "23", title: "under $15"},
  ];
  const time = [
    {id: "24", title: "under 1 hour"}, 
    {id: "25", title: "under half hour"}, 
    {id: "26", title: "under 15 min"}
  ];

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.myButton, style]}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FF007F" : "#7C9262";

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id); setSearchParam(item.title) }}
        style={{ backgroundColor }}
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
                <Text style={styles.searchText}>Search Recipes</Text>
                <View style={styles.inputView} >
                  <TextInput
                    defaultValue={recipeParam}
                    style={styles.inputText}
                    onChangeText={(text) => { setRecipeParam(text) }}
                    onSubmitEditing={() => {
                      navigation.navigate('SearchRecipes', { recipeParam, searchParam });
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.scrollContainer}>
            <View>
              <Text style={styles.category}>DIET</Text>
              <FlatList
                horizontal
                data={diet}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
              />
              <Text style={styles.category}>CUISINE</Text>
              <FlatList
                horizontal
                data={cuisine}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
              />
              <Text style={styles.category}>DIFFICULTY</Text>
              <FlatList
                horizontal
                data={difficulty}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
              />
              <Text style={styles.category}>COST</Text>
              <FlatList
                horizontal
                data={cost}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
              />
              <Text style={styles.category}>TIME</Text>
              <FlatList
                horizontal
                data={time}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
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

export default SearchParametersScreen;
