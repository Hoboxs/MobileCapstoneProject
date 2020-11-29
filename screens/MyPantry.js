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
    return (
      <View
        key={item.stored_ingredient_id}
        style={{backgroundColor: 'white', padding: 20}}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Email: {item.user_email}</Text>
        <Text>Password: {item.user_password}</Text>
      </View>
    );
  };

  let searchStoredDairyIngredients = () => {
    setStoredIngredientData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_stored_ingredients where category_name = ?',
        ['dairy'],
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
                    placeholderTextColor="lightgrey"
                    onChangeText={
                      // eslint-disable-next-line no-shadow
                      (inputIngredientId) =>
                        setInputIngredientId(inputIngredientId)
                    }
                  />
                  <Button
                    style={styles.button}
                    title="Search Ingredient"
                    onPress={searchIngredient}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.display}>
            <Text style={styles.displayText}>
              Ingredient:
              {ingredientData.ingredient_name}
              Category:
              {ingredientData.category_name}
            </Text>
            <Button
              title="Add Ingredient"
              onPress={addIngredient}
              style={styles.button}
            />
            <Text />
            {/*<Button
              title="Update Stored Ingredients"
              onPress={searchStoredDairyIngredients}
            />
            <FlatList
              data={storedIngredientData}
              ItemSeparatorComponent={listViewItemSeparator}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => listStoredIngredientItemView(item)}
            />*/}
          </View>

          <View style={styles.scrollContainer}>
            <ScrollView>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/dairy-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'butter',
                          value: 'butter',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'cheddar',
                          value: 'cheddar',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'milk',
                          value: 'milk',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      arrowSize={25}
                      placeholder={'Dairy'}
                      placeholderStyle={styles.searchText}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/broccoli-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'broccoli',
                          value: 'broccoli',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'carrots',
                          value: 'carrots',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Vegetables'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/fruit-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'apples',
                          value: 'apples',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'bananas',
                          value: 'bananas',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Fruits'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/grains-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'bread',
                          value: 'bread',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'wheat',
                          value: 'wheat',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Grains'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/meat-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'chicken',
                          value: 'chicken',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'beef',
                          value: 'beef',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Meat'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/seafood-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'squid',
                          value: 'squid',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'salmon',
                          value: 'salmon',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Seafood'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/spices-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'cinnamon',
                          value: 'cinnamon',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'pepper',
                          value: 'pepper',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Spices'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/sweetners-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'sugar',
                          value: 'sugar',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'honey',
                          value: 'honey',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Sweeteners'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.scroll}>
                <ImageBackground
                  source={require('../images/background/dark-wood.jpg')}
                  style={styles.backgroundImage}>
                  <Text style={styles.searchText}>
                    <Image
                      style={styles.icon}
                      source={require('../images/pantry/nuts-icon.jpg')}
                    />
                    <DropDownPicker
                      items={[
                        {
                          label: 'almonds',
                          value: 'almonds',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                        {
                          label: 'cashews',
                          value: 'cashews',
                          icon: () => (
                            <Icon name="trash" size={18} color="black" />
                          ),
                        },
                      ]}
                      defaultValue=""
                      containerStyle={{height: 20}}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 4,
                      }}
                      itemStyle={{
                        justifyContent: 'flex-start',
                        backgroundColor: 'white',
                      }}
                      dropDownStyle={{backgroundColor: 'white'}}
                      arrowStyle={{backgroundColor: 'transparent'}}
                      arrowColor="white"
                      placeholder={'Nuts'}
                      placeholderStyle={styles.searchText}
                      arrowSize={25}
                    />
                  </Text>
                </ImageBackground>
              </View>
            </ScrollView>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 100,
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
  scrollContainer: {
    flex: 3,
    width: '80%',
  },
  scroll: {
    width: '100%',
    height: 100,
    marginBottom: 15,
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
  },
  display: {
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  button: {
    width: 50,
    height: 70,
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
