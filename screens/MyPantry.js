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
  ImageBackground,
} from 'react-native';

/* https://www.npmjs.com/package/react-native-dropdown-picker */
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class MyPantryScreen extends React.Component {

  constructor({navigation}) {
    super();
  }

  render() {
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
                    />
                  </View>
                </View>
              </ImageBackground>
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
  }
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
});

export default MyPantryScreen;
