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
      txn.executeSql('DROP TABLE IF EXISTS table_userFavorites', []);
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_userFavorites'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_userFavorites', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_userFavorites(fav_id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, recipe_id INTEGER)',
              [],
            );
            tx.executeSql(
              'INSERT INTO table_userFavorites (user_id, recipe_id) VALUES (?,?)',
              [1, 1],
            );
            tx.executeSql(
              'INSERT INTO table_userFavorites (user_id, recipe_id) VALUES (?,?)',
              [1, 2],
            );
          }
        },
      );
    });
  }, []);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS table_user', []);
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
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
              'CREATE TABLE IF NOT EXISTS table_recipe(recipe_id INTEGER PRIMARY KEY AUTOINCREMENT, recipe_title VARCHAR(20), recipe_description VARCHAR(255), recipe_ingredients VARCHAR(255), recipe_level VARCHAR(10), recipe_cookTime VARCHAR(10), recipe_imageUrl VARCHAR(255), recipe_categories VARCHAR(255) )',
              [],
            );

            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl, recipe_categories) VALUES (?,?,?,?,?,?,?)',
              [
                'Perfect Roast Chicken',
                '\n1. Preheat oven to 350 degrees F (175 degrees C). \n2. Place chicken in a roasting pan, and season generously inside and out with salt and pepper. Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity. Arrange dollops of the remaining margarine around the chickens exterior. Cut the celery into 3 or 4 pieces, and place in the chicken cavity. \n3. Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C). Remove from heat, and baste with melted margarine and drippings. Cover with aluminum foil, and allow to rest about 30 minutes before serving. ',
                '1 whole chicken, Salt, Pepper, 1 tablespoon onion powder, 1/2 cup margarine, 1 stalk celery',
                'Intermediate',
                '1 hour 40 min',
                'https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Juicy-Roast-Chicken-25.jpg',
                'paleo, low-carb, healthy, gluten-free, intermediate, under $30'
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl, recipe_categories) VALUES (?,?,?,?,?,?,?)',
              [
                'Stove top Steak',
                '\n1. Liberally coat the steaks with the salt. \n2. Heat a 12-inch cast iron skillet over high heat for about 10 minutes; the pan should smoke just a bit when it is properly heated. \n3. Cook the chicken for 40 min \n4. Carefully place the steaks in the hot pan and cook on the first side until enough of a crust has developed that the steaks no longer stick to the pan, about 1 minute. Flip and cook on the other side for 1 minute. Continue cooking and flipping for a total of 4 minutes. \n5. Carefully add the butter, garlic, and herbs to the pan. Flip the steaks once more. Tilt the pan so the butter pools on one side and use a large spoon to baste the butter over the steaks. Flip again and repeat. Begin checking the internal temperature of the steaks at 6 minutes total cook time for your preferred doneness. Medium rare is between 125°F and 130°F.',
                '2 New York Steaks, Salt, 3 tablespoons butter, 3 cloves garlic, 2 springs fresh rosemary',
                'Easy',
                '30 min',
                'https://cookthestory.com/wp-content/uploads/2018/09/Steak-from-Frozen-1392x780-1716.jpg',
                'paleo, low-carb, gluten-free, french'
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl, recipe_categories) VALUES (?,?,?,?,?,?,?)',
              [
                'Garlic Broccoli',
                '\n1. In a Dutch oven, bring 1/2 in. of water to a boil. Add broccoli; cover and cook for 3-5 minutes or until crisp-tender; drain. Mix remaining ingredients; toss with broccoli.',
                '13 cups fresh broccoli florets, 3 tablespoons butter, 5 garlic cloves, salt',
                'Easy',
                '5 min',
                'https://buildyourbite.com/wp-content/uploads/2018/06/broccoli-with-garlic-sauce-4-720x540.jpg',
                'vegan, vegetarian, paleo, low-carb, healthy, gluten-free, french, italian, mexican, thai, indian, chinese, caribbean, greek, japanese, novice, under $15, under 15 min'
              ],
            );
            tx.executeSql(
              'INSERT INTO table_recipe (recipe_title, recipe_description, recipe_ingredients, recipe_level, recipe_cookTime, recipe_imageUrl, recipe_categories) VALUES (?,?,?,?,?,?,?)',
              [
                'Honey Garlic Salmon',
                '\n1. Season salmon with salt and pepper. \n2. Add oil to a large skillet over medium high heat. \n3. Once hot add in the salmon skin side down. \n4 Cook salmon for 5-7 minutes on skin side (depending on size). \n5 Very carefully flip salmon. If the skin is sticking to the pan give it more time to cook. It should release easily from the pan. \n6 Add garlic to the pan and cook for 1 minute. \n7 Combine honey and lemon juice in a small bowl. Add the sauce to the pan. \n8. Continue cooking for 1-3 minutes or until the salmon is fully cooked and looks opaque and the sauce is thick. \n9 Take off of the heat. When the salmon is cool enough to handle peel off the skin. \n10. Serve immediately with a sprinkle of chopped parsley for garnish, if desired.  ',
                '4 salmon filets, 1 tablespoon butter, 3 garlic cloves, 3 tablespoons honey, 2 tablespoons lemon juice',
                'Easy',
                '20 min',
                'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/18924-lemon-pepper-salmon-760x580.jpg?ext=.jpg',
                'pescatarian, paleo, low-carb, healthy, gluten-free, french, italian, chinese, japanese, greek'
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
              ['margarine', 'dairy'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['butter', 'dairy'],
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
              ['salmon', 'meat'],
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
              ['lemon', 'fruit'],
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
              ['celery', 'vegetable'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['garlic', 'vegetable'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['bread', 'grain'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['wheat', 'grain'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['salt', 'spices'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['pepper', 'spices'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['onion powder', 'spices'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['rosemary', 'vegetable'],
            );
            tx.executeSql(
              'INSERT INTO table_ingredients (ingredient_name, category_name) VALUES (?,?)',
              ['honey', 'sweeteners'],
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
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_stored_ingredients', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_stored_ingredients(stored_ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT, stored_ingredient_name VARCHAR(20), stored_category_name VARCHAR(20))',
                            [],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['milk', 'dairy'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['cheese', 'dairy'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['margarine', 'dairy'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['butter', 'dairy'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['beef', 'meat'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['chicken', 'meat'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['salmon', 'meat'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['banana', 'fruit'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['apple', 'fruit'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['lemon', 'fruit'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['broccoli', 'vegetable'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['carrot', 'vegetable'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['celery', 'vegetable'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['garlic', 'vegetable'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['bread', 'grain'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['wheat', 'grain'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['salt', 'spices'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['pepper', 'spices'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['onion powder', 'spices'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['rosemary', 'vegetable'],
                        );
                        tx.executeSql(
                          'INSERT INTO table_stored_ingredients (stored_ingredient_name, stored_category_name) VALUES (?,?)',
                          ['honey', 'sweeteners'],
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
