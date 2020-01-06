import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


class pageOne extends Component{
 render(){
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} >
        this is a screen to make the two screens not always equal :D
      </Text>
    </View>
  );
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7fbfbf"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});

export default (pageOne);
