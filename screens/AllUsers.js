import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, SafeAreaView} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const AllUsersScreen = () => {
  let [flatListUserItems, setFlatListUserItems] = useState([]);
  let [flatListRecipeItems, setFlatListRecipeItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setFlatListUserItems(temp);
      });
      tx.executeSql('SELECT * FROM table_recipe', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        setFlatListRecipeItems(temp);
      });
    });
  }, []);

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

  let listUserItemView = (item) => {
    return (
      <View key={item.user_id} style={{backgroundColor: 'white', padding: 20}}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Email: {item.user_email}</Text>
        <Text>Password: {item.user_password}</Text>
      </View>
    );
  };

  let listRecipeItemView = (item) => {
    return (
      <View
        key={item.recipe_id}
        style={{backgroundColor: 'white', padding: 20}}>
        <Text>Id: {item.recipe_id}</Text>
        <Text>Title: {item.recipe_title}</Text>
        <Text>Level: {item.recipe_level}</Text>
        <Text>Cook Time: {item.recipe_cookTime}</Text>
        <Text>Ingredients: {item.recipe_ingredients}</Text>
        <Text>Directions: {item.recipe_description}</Text>
        <Text>Image URL: {item.recipe_imageUrl}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Text>Users: </Text>
          <FlatList
            data={flatListUserItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listUserItemView(item)}
          />
          <Text>Recipes: </Text>
          <FlatList
            data={flatListRecipeItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => listRecipeItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllUsersScreen;
