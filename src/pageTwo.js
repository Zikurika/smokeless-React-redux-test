
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IncrementScreenTwo } from "./store/actions/index";

class pageTwo extends Component{
  render(){
   
   
   return (
     <View style={styles.container}>
       <Text style={styles.welcome} >
         Screen Two
       </Text>
       <Text style={styles.welcome} onPress={() => this.props.IncrementScreenTwo()}>
        {this.props.count}
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
     backgroundColor: "#ff1919"
   }, 
   welcome: {
     fontSize: 20,
     textAlign: "center",
     margin: 10,
     color: "#ffffff"
   }
 });
 
 function mapStateToProps(state) {
   return {
     count: state.count.countTwo
   };
 }
 function matchDispatchToProps(dispatch) {
   return bindActionCreators(
     { IncrementScreenTwo: IncrementScreenTwo },
     dispatch
   );
 }
 
 export default connect(mapStateToProps, matchDispatchToProps)(pageTwo);
 