import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Calculadora");
  };

  const handlePressNote = () => {
    navigation.navigate("NotePad");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handlePress} underlayColor="transparent">
        <Image style={styles.image} source={require("./img/564429.png")} />
      </TouchableHighlight>

      <TouchableHighlight onPress={handlePressNote} underlayColor="transparent">
        <Image style={styles.image} source={require("./img/notepad.png")} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
  image: {
    margin: 10,
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});

export default HomePage;
