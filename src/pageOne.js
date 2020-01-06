import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IncrementScreenOne } from "./store/actions/index";

class pageOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen One</Text>
        <Text style={styles.welcome}>{this.props.count}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E8B57"
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
    count: state.count.countOne
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { IncrementScreenOne: IncrementScreenOne },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(pageOne);
