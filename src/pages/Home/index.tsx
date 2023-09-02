import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../../styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState<string>("");

  function handleDetails() {
    navigation.navigate("details", { name });
    setName("");
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
      <Text style={styles.textTitle}> Digite seu nome : </Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity style={styles.homeButton} onPress={handleDetails}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
}
