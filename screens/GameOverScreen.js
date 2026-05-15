import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";

const deviceWidth = Dimensions.get("window").width;

export default function GameOverScreen({
  onStartNewGame,
  roundsNumber,
  userNumber,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <Image
        source={require("../assets/images/success.png")}
        style={styles.image}
      />
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
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
    fontSize: deviceWidth < 380 ? 16 : 18,
    textAlign: "center",
    marginBottom: deviceWidth < 380 ? 12 : 24,
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 220,
  },
  image: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    marginVertical: deviceWidth < 380 ? 12 : 24,
    borderWidth: 3,
    borderColor: Colors.accent500,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
