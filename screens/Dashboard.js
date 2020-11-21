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
} from 'react-native';

const DashboardScreen = ({navigation}) => {
   return (
     <View style={styles.container}>
       <View style={styles.searchHeader}>
        <Text style={styles.searchText}>Discover</Text>
        <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Search"
          placeholderTextColor="lightgrey"
        />
        </View>
       </View>
       <View style={styles.scrollContainer}>
       <ScrollView>
        <View style={styles.scroll}>
          <Text>USE YOUR CHICKEN</Text>
          <ScrollView horizontal>
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
          </ScrollView>
        </View>
        <View style={styles.scroll}>
          <Text>USE YOUR BROCCOLI</Text>
          <ScrollView horizontal>
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
          </ScrollView>
        </View>
        <View style={styles.scroll}>
          <Text>USE YOUR TOFU</Text>
          <ScrollView horizontal>
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
          </ScrollView>
        </View>
        <View style={styles.scroll}>
          <Text>USE YOUR BEEF</Text>
          <ScrollView horizontal>
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
          </ScrollView>
        </View>
        <View style={styles.scroll}>
          <Text>USE YOUR CARROTS</Text>
          <ScrollView horizontal>
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
            <Image
              style={{ width: 156.75, height: 116.25, marginBottom: 20 }}
              source={require("../images/bitstobiteslogo.png")}
            />
          </ScrollView>
        </View>
        </ ScrollView>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHeader: {
    width:"100%",
    backgroundColor:"#7C9262",
    justifyContent:"center",
    alignItems: 'center',
    flex: 1,
  },
  searchText: {
    textAlign: 'center',
    marginBottom:20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flex: 3,
  },
  scroll: {
    width:"100%",
    backgroundColor:"#E5E5E5",
    height:100,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
});

export { DashboardScreen };
