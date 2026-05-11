import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = useRef();

  if (!initialGuess.current) {
    minBoundary = 1;
    maxBoundary = 100;
    initialGuess.current = generateRandomBetween(1, 100, userNumber);
  }

  const [currentGuess, setCurrentGuess] = useState(initialGuess.current);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (currentGuess === userNumber) {
      return;
    }

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.controlsCard}>
        <InstructionsText>Higher or Lower?</InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logContainer}>
        <InstructionsText>LOG ROUNDS</InstructionsText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: "center",
  },
  controlsCard: {
    gap: 20,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  logContainer: {
    marginTop: 24,
    alignItems: "center",
  },
});
