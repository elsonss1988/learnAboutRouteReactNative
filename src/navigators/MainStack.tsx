import { Header, createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/Home";
import Details from "../pages/Details";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  useRoute,
} from "@react-navigation/native";
import {
  Alert,
  Button,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles";
import { useState } from "react";

const { Navigator, Screen } = createStackNavigator();

type RootParamList = {
  details: {
    name: string;
  };
  home: undefined;
};

type RouteParams = {
  name: string;
};

export default () => {
  // const route = useRoute();
  // const { name } = route.params as RouteParams;
  const [routeName, setRouteName] = useState("");
  function titleApp(route: RouteProp<ParamListBase, "details">) {
    const { name } = route.params as RouteParams;
    setRouteName(name);
  }

  return (
    <View style={styles.routeContainer}>
      <NavigationContainer>
        <Navigator
          screenOptions={{ headerShown: true, headerStyle: { height: 120 } }}
        >
          <Screen
            name="home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerTitleAlign: "center",
            }}
          />
          <Screen
            name="details"
            component={Details}
            options={({ route }) => (
              titleApp(route),
              {
                title: "Bem Vindo " + routeName,
                headerLeft: () => undefined,
                headerTitleAlign: "center",
                headerPressColor: "#FFBB00",
                headerStyle: {},
                headerRight: () => (
                  <Button
                    title="Alert"
                    onPress={() => {
                      Alert.alert("Welcome");
                    }}
                  />
                ),
              }
            )}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  );
};
