import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { StatusBar } from "react-native";

import theme from "./src/global/styles/theme";

// import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
       <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      {/* <Dashboard /> */}
      <Register />
    </ThemeProvider>
  );
}
