import React from 'react';
import { useFonts } from "expo-font";
import { View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar'; 
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";


const Home = ({ navigation }) => {
  return (
    <Animatable.View animation="fadeIn" style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../photos/background.png")}
      >
        <Text style={styles.text2}>Welcome to Todo App</Text>
        <Image source={require('../photos/44.png')} style={styles.centerImage} />
      </ImageBackground>
      <Text style={styles.text}>Get your life organized !!</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Second')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    color : 'black',
    
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle :'italic',
 
    paddingBottom : 200 , 
    paddingTop : 100,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: 150,
    height: 60,
    borderRadius: 45,
    backgroundColor: '#5C5858',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  centerImage: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    marginTop : 200 ,
  },
});

export default Home;
