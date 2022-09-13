import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackParamList } from "src/screens/NativeStackParamList";

type Props = NativeStackScreenProps<NativeStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { test: "x" })}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
