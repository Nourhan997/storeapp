import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import CategoriesScreen from "./src/screens/Categories/CategoriesScreen";
import ItemScreen from "./src/screens/Item/ItemScreen";
import CateogryListScreen from "./src/screens/CateogryList/CateogryListScreen";
import DrawerContainer from "./src/screens/DrawerContainer/DrawerContainer";
import SearchScreen from "./src/screens/Search/SearchScreen";
import AddScreen from "./src/screens/Form/AddScreen";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Item: ItemScreen,
    Create: AddScreen,
    List: CateogryListScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Home",
    defaulfNavigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    },
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  }
);

const AppContainer = createAppContainer(DrawerStack);

function App() {
  return <AppContainer />;
}

export default App;
