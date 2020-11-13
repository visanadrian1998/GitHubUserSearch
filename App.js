import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { StyleSheet, Text, View, Button } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [boolean, setBoolean] = useState(false);

  return (
    <NavigationContainer theme={boolean === true ? DarkTheme : DefaultTheme}>
      <Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: 10,
              }}
            >
              <ToggleSwitch
                isOn={boolean}
                onColor="white"
                offColor="black"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="medium"
                onToggle={() => setBoolean(!boolean)}
              />
            </View>
          ),
        }}
      >
        <Screen name="Screen1" component={Screen1} options={{}} />
        <Screen name="Screen2" component={Screen2} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
