import React, {useEffect} from 'react';
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
  Platform,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const IntroScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_user', []);
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(30), user_password VARCHAR(20))',
              [],
            );
            tx.executeSql(
              'INSERT INTO table_user (user_name, user_email, user_password) VALUES (?,?,?)',
              ['Admin', 'Admin@Admin.com', 'admin'],
            );
          }
        },
      );
    });
  }, []);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_recipe', []);
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_recipe'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_recipe', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_recipe(recipe_id INTEGER PRIMARY KEY AUTOINCREMENT, recipe_title VARCHAR(20), recipe_description VARCHAR(255), recipe_ingredients VARCHAR(255), recipe_level VARCHAR(10), recipe_cookTime VARCHAR(10), recipe_imageUrl VARCHAR(255))',
              [],
            );

            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl) VALUES (?,?,?,?,?,?)',
              [
                'Roast Chicken',
                '\n1. Put Pepper and Salt on the Chicken \n2. Put Chicken in over at 450 F \n3. Cook the chicken for 40 min',
                'Chicken, Salt, Pepper',
                'Easy',
                '20 min',
                'food1.jpg',
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl) VALUES (?,?,?,?,?,?)',
              [
                'Roast Chicken',
                '\n1. Put Pepper and Salt on the Chicken \n2. Put Chicken in over at 450 F \n3. Cook the chicken for 40 min',
                'Chicken, Salt, Pepper',
                'Easy',
                '20 min',
                'food1.jpg',
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl) VALUES (?,?,?,?,?,?)',
              [
                'Roast Chicken',
                '\n1. Put Pepper and Salt on the Chicken \n2. Put Chicken in over at 450 F \n3. Cook the chicken for 40 min',
                'Chicken, Salt, Pepper',
                'Easy',
                '20 min',
                'food1.jpg',
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl) VALUES (?,?,?,?,?,?)',
              [
                'Roast Chicken',
                '\n1. Put Pepper and Salt on the Chicken \n2. Put Chicken in over at 450 F \n3. Cook the chicken for 40 min',
                'Chicken, Salt, Pepper',
                'Easy',
                '20 min',
                'food1.jpg',
              ],
            );
          }
        },
      );
    });
  }, []);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_ingredients', []);
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_ingredients'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_ingredients', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_ingredients(ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT, ingredient_name VARCHAR(20), category_name VARCHAR(20))',
              [],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['milk', 'dairy'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['cheese', 'dairy'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['beef', 'meat'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['chicken', 'meat'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['banana', 'fruit'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['apple', 'fruit'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['broccoli', 'vegetable'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['carrot', 'vegetable'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['bread', 'grain'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['wheat', 'grain'],
            );
          }
        },
      );
    });
  }, []);


    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS table_stored_ingredients', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_stored_ingredients'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_stored_ingredients', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_stored_ingredients(stored_ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT, stored_ingredient_name VARCHAR(20), stored_category_name VARCHAR(20))',
                            [],
                        );
                        tx.executeSql(
                            'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                            ['yogurt', 'dairy'],
                        );
                    }
                },
            );
        });
    }, []);

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={require('../images/background/light-wood.jpg')}
        style={styles.image}>
        <View style={styles.container}>
          <Image
            style={{width: 313.5, height: 232.5, marginBottom: 20}}
            source={require('../images/bitstobiteslogo.png')}
          />
          <TouchableOpacity
            style={styles.enterBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.enterText}>ENTER</Text>
          </TouchableOpacity>
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
  enterBtn: {
    width: '80%',
    backgroundColor: '#7C9262',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  enterText: {
    color: 'black',
  },
});

export default IntroScreen;
