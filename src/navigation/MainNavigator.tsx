import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mergedStacks } from "./ScreenCollections";
import { useCustomTheme } from "./Theme";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const theme = useCustomTheme();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        statusBarColor: theme.colors.background,
      })}
      initialRouteName="AuthVerificationScreen"
    >
      {mergedStacks.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
