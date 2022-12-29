import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomSelect from "./src/components/CustomSelect";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.h1}>
        <Text style={styles.h1Text}>הבסיס שלי</Text>
      </View>
      <CustomSelect
        icon="gender-male-female"
        text="מין"
        value="זכר"
        isDisplayOnly={true}
        navigation="genderSelection"
      />
      <CustomSelect
        icon="apple-keyboard-command"
        text="מתעניין ב"
        value="נשים"
        isDisplayOnly={true}
        navigation="IntrestSelection"
      />
       <CustomSelect
        icon="gender-male-female"
        text="מין"
        value="זכר"
        isDisplayOnly={false}
        navigation="genderSelection"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6e5"
  },
  h1: {
    width: "100%",
    padding: 10
  },
  h1Text: {
    fontSize: 20,
    color: "#000"
  },
  
});
