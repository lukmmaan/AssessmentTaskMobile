
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import RootNavigator from './src/RootNavigator/RootNavigator';
import reducers from "./src/components/redux/reducers"
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default function App() {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
