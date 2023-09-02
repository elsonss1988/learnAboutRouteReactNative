import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../styles";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootParamList = {
  details: undefined;
  home: undefined;
};

type RouteParams = {
  name: string;
};

type Props = {
  navigation: StackNavigationProp<RootParamList, "details", "home">;
};

export default function Details({ navigation }: Props) {
  const route = useRoute();
  const { name } = route.params as RouteParams;

  function handleBackHome() {
    navigation.navigate("home");
  }

  {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#FFBB00",
        height: 120,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        {` Hello ${name.length == 0 ? "Visitante" : name}`}
      </Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          handleBackHome();
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
