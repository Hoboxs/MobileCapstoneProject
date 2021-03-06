import React, {useState, useEffect} from 'react';
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
  Alert,
  FlatList,
  Picker,
    TouchableHighlight,
} from 'react-native';

/* https://www.npmjs.com/package/react-native-dropdown-picker */
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'UserDatabase.db'});

const MyPantryScreen = ({navigation}) => {
  let [inputIngredientId, setInputIngredientId] = useState('');
  let [ingredientData, setIngredientData] = useState({});
  let [storedIngredientData, setStoredIngredientData] = useState({});
  let [inputStoredIngredientName, setInputStoredIngredientName] = useState('');

  let searchIngredient = () => {
    console.log(inputIngredientId);
    setIngredientData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_ingredients where ingredient_name = ?',
        [inputIngredientId],
        (tx, results) => {
          let len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setIngredientData(results.rows.item(0));
          } else {
            alert('No ingredient found');
          }
        },
      );
    });
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

  let listStoredIngredientItemView = (item) => {
    let image = imageForItemView(item);
    return (
      <View key={item.stored_ingredient_id} style={styles.scroll}>
        <ImageBackground
          source={require('../images/background/dark-wood.jpg')}
          style={styles.backgroundImage}>
          <Image style={styles.icon} source={image} />
          <Text style={styles.flatListItem}>
            {item.stored_ingredient_name}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  let imageForItemView = (item) => {
    let image = '';
    if (item.stored_category_name === 'dairy'){
      image = require('../images/pantry/dairy-icon.jpg');
    }
    else if (item.stored_category_name === 'spices'){
      image = require('../images/pantry/spices-icon.jpg');
    }
    else if (item.stored_category_name === 'meat'){
      image = require('../images/pantry/meat-icon.jpg');
    }
    else if (item.stored_category_name === 'fruit'){
      image = require('../images/pantry/fruit-icon.jpg');
    }
    else if (item.stored_category_name === 'vegetable'){
      image = require('../images/pantry/broccoli-icon.jpg');
    }
    else if (item.stored_category_name === 'seafood'){
      image = require('../images/pantry/seafood-icon.jpg');
    }
    else if (item.stored_category_name === 'sweeteners'){
      image = require('../images/pantry/sweetners-icon.jpg');
    }
    else if (item.stored_category_name === 'grain'){
      image = require('../images/pantry/grains-icon.jpg');
    }
    else if (item.stored_category_name === 'nut'){
      image = require('../images/pantry/nuts-icon.jpg');
    }
    else {
      image = require('../images/pantry/fruit-icon.jpg');
    }
    return image;
  };

  let searchStoredDairyIngredients = () => {
    setStoredIngredientData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_stored_ingredients order by "stored_category_name"',
        [],
        (tx, results) => {
          let temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setStoredIngredientData(temp);
        },
      );
    });
  };

  let addIngredient = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
        [ingredientData.ingredient_name, ingredientData.category_name],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You have added an ingredient to your pantry',
              [
                {
                  text: 'Ok',
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Attempt to add ingredient Failed');
          }
        },
      );
    });
  };

  let deleteIngredient = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM table_stored_ingredients WHERE stored_ingredient_name = ?;',
        [inputStoredIngredientName],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You have deleted an ingredient to your pantry',
              [
                {
                  text: 'Ok',
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Attempt to delete ingredient Failed');
          }
        },
      );
    });
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={require('../images/background/light-wood.jpg')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <ImageBackground
              source={require('../images/background/dark-wood.jpg')}
              style={styles.image}>
              <View style={styles.searchHeader}>
                <Text style={styles.searchText}>My Pantry</Text>
                <View style={styles.inputView}>
                  <TextInput
                      style={styles.inputText}
                    placeholder="Search Ingredients"
                    placeholderTextColor="grey"
                    onChangeText={
                      // eslint-disable-next-line no-shadow
                      (inputIngredientId) =>
                        setInputIngredientId(inputIngredientId)
                    }
                  />
                  <TouchableHighlight style={{marginTop: 8}} onPress={searchIngredient}>
                    <View>
                      <Icon name="search" size={25} color="black" style={{justifyContent: 'center'}}/>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.searchDisplay}>
            <Text style={styles.displayText}>
              {ingredientData.ingredient_name}
            </Text>
            <TouchableHighlight style={{marginLeft: 10,}} onPress={addIngredient}>
              <View>
                <Icon name="plus" size={30} color="blue"/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: 10}} onPress={searchStoredDairyIngredients}>
              <View>
                <Icon name="rotate-ccw" size={30} color="black"/>
              </View>
            </TouchableHighlight>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row', marginBottom: 20,}}>
            <TextInput
              style={{backgroundColor: 'white', width: 240}}
              placeholder="Type Ingredient to Remove"
              placeholderTextColor="grey"
              fontSize={18}
              onChangeText={
                // eslint-disable-next-line no-shadow
                (inputStoredIngredientName) =>
                  setInputStoredIngredientName(inputStoredIngredientName)
              }
            />
            <TouchableHighlight style={{marginTop: 7}} onPress={deleteIngredient}>
              <View>
                <Icon name="trash" size={25} color="red" />
              </View>
            </TouchableHighlight>
          </View>
          <SafeAreaView style={styles.scrollContainer}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/background/light-wood.jpg')}
                style={styles.image}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.imageTitle}>
                  <Text style={styles.titleText}>Pantry: </Text>
                </ImageBackground>
                <View style={{flex: 1, marginTop: 20}}>
                  <FlatList
                    data={storedIngredientData}
                    ItemSeparatorComponent={listViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => listStoredIngredientItemView(item)}
                  />
                </View>
              </ImageBackground>
            </View>
          </SafeAreaView>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageTitle: {
    height: 50,
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'flex-start',
  },
  searchContainer: {
    width: '100%',
    flex: 1,
  },
  searchHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  backgroundImage1: {
    flex: 1,
    width: '100%',
  },
  dropdownCategory: {
    textAlign: 'center',
    fontSize: 20,
  },
  searchText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  flatListItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  scrollContainer: {
    flex: 3,
    width: '80%',
  },
  scroll: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 5,
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchDisplay: {
    marginTop: 20,
    flexDirection: 'row',
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  inputText: {
    width: 200,
    color: 'black',
  },
  displayText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
  },
});

export default MyPantryScreen;
