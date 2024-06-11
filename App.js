import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import telaLogin from "./telaLogin";
import telaGeral from "./telaGeral";
import telaCadastro from "./telaCadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tela Login">
      <Stack.Screen name="Tela Login" component={telaLogin} options={{headerShown:false}}/>
      <Stack.Screen name="Tela Geral" component={telaGeral} options={{headerShown:false}}/>
      <Stack.Screen name="Tela Cadastro" component={telaCadastro} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  ); 
}