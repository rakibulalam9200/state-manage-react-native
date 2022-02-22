import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import ListView from "./src/screens/ListView";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import {NavigationContainer} from "@react-navigation/native";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Component" component={ComponentScreen} />
              <Stack.Screen name="ListView" component={ListView} />
              <Stack.Screen name="Image" component={ImageScreen} />
              <Stack.Screen name="Counter" component={CounterScreen} />
              <Stack.Screen name="Color" component={ColorScreen} />
              <Stack.Screen name="SquareColor" component={SquareScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    androidSafeArea: {
        flex: 1,
        backgroundColor: 'skyblue',
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
});
