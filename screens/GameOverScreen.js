import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameOverContainer}>
        <View style={styles.textContainer}>
          <Text>The Game Is Over!</Text>
          <Text>Number of rounds: {props.roundsNumber}</Text>
          <Text>Number was: {props.userNumber}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gameOverContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 25
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10
  }
});

export default GameOverScreen;
