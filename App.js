import React, { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import { View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import Sun from "./assets/sun";
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [boolean, setBoolean] = useState(true);

  return (
    <NavigationContainer theme={boolean === false ? DarkTheme : DefaultTheme}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: 10,
              }}
            >
              <Sun
                style={{
                  marginRight: 3,
                }}
              />
              <ToggleSwitch
                isOn={boolean}
                onColor="black"
                offColor="#009688"
                size="medium"
                onToggle={() => setBoolean(!boolean)}
              />
            </View>
          ),
        }}
      >
        <Screen name="Home" component={Screen1} />
        <Screen name="Results" component={Screen2} />
      </Navigator>
    </NavigationContainer>
  );
}
