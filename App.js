import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokemoon from "./src/screens/Pokemoon";
import DetailPokemoon from "./src/screens/DetailPokemoon";
import EditPokemoon from "./src/screens/EditPokemoon";
import PokemoonEvolution from "./src/screens/PokemoonEvolution";
import { Provider } from "react-redux";
import store from "./src/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pokemoon" component={Pokemoon} />
          <Stack.Screen name="DetailPokemoon" component={DetailPokemoon} />
          <Stack.Screen name="EditPokemoon" component={EditPokemoon} />
          <Stack.Screen
            name="PokemoonEvolution"
            component={PokemoonEvolution}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
