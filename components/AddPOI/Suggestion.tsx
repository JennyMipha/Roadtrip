import React from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Suggestion({ city }) {
  const navigation = useNavigation();
  const handlePress = (term: string) => {
    console.log('In Suggestion, Pressed term = ', term);
    console.log('In Suggestion, city = ', city);

    navigation.navigate('POIList', {
      city: city,
      term: term,
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Attractions" onPress={() => handlePress('attraction')} ></Button>
      <Button title="Restaurants" onPress={() => handlePress('restaurant')} ></Button>
      <Button title="Gas" onPress={() => handlePress('gas')} ></Button>
      <Button title="Coffee" onPress={() => handlePress('coffee')} ></Button>
      <Button title="Hotels" onPress={() => handlePress('hotel')} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
