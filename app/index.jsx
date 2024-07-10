import React, { useEffect, useState } from 'react';
import GetLocation, { Location, LocationErrorCode, isLocationError } from 'react-native-get-location';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { InfoButton } from '../assets/icons/icons';

export default function App(props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image
        source={require('../assets/fnm-logo.png')}
        style={styles.logoImage}
      />
        <Text style={styles.titleLogo}>foodnearme</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: 'https://static.cfacdn.com/photos/restaurants/04834/large.jpg'}}
          style={styles.image}
        />
        <View>

        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('You get a hug')}>
        <Text style={styles.buttonText}>New Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    height: 30,
    width: '80%',
  },
  logoImage: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  titleLogo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d06565',
  },
  imageContainer: {
    height: '65%',
    width: '80%',
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    minWidth: '100%',
  },
  button: {
    backgroundColor: '#d06565',
    padding: 20,
    borderRadius: 10,
    marginBottom: 100,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});