// screens/HomePage.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Calculadora');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.image} source={require('./img/564429.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
});

export default HomePage;