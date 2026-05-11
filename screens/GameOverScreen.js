import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

export default function GameOverScreen({ onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <Text style={styles.summaryText}>
        The round is finished. Start a new game.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  summaryText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 220,
  },
});
