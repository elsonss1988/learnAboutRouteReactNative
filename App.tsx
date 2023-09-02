import { SafeAreaView, Text } from "react-native";
import styles from "./styles";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigators/MainStack";

export default function App() {
  return <MainStack />;
}
