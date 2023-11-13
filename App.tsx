import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import store from "../CloneApp/src/redux/store";
import { Provider } from "react-redux"; // provider ile mevcut app redux'a gömülür(encapsulate).Böylece app'imizdeki tüm partlar store'a erişim sağlayabilecek.

export default function App() {
  LogBox.ignoreAllLogs(); // ignore all log notifications
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //marginTop: '15%'
  },
});
