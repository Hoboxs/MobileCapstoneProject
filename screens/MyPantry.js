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
} from 'react-native';

/* https://www.npmjs.com/package/react-native-dropdown-picker */
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const MyPantryScreen = ({navigation}) => {

   return (
     <View style={styles.container}>

       <DropDownPicker
          items={[
              {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
              {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
          ]}

          multiple={true}
          multipleText="%d items have been selected."
          min={0}
          max={10}

          defaultValue={'uk'}
          containerStyle={{height: 40}}

          style={{paddingVertical: 10}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          containerStyle={{width: 150, height: 70}}

      />
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
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
  registerBtn:{
    width:"80%",
    backgroundColor:"#7C9262",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20
  },
  registerText:{
    color:"white"
  },
});

export { MyPantryScreen };
