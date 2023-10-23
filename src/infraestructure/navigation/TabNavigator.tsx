import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../features/Home/Home.view";

import { AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { getHP, getWP } from "../utils/dimensions";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  height: getHP(11),
  backgroundColor: "#F66262",
};


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Samples"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabItemContainer,
                focused && styles.tabItemActiveContainer,
              ]}
            >
              <AntDesign name="medicinebox" size={24} color={"#FFF"} />
              <Text style={styles.tabItemLabel}>Muestras</Text>
            </View>
          ),
          tabBarLabel: "Muestras",
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabItemContainer,
                focused && styles.tabItemActiveContainer,
              ]}
            >
              <Feather name="home" size={24} color={"#FFF"} />
              <Text style={styles.tabItemLabel}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Vadermecum"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.tabItemContainer,
                focused && styles.tabItemActiveContainer,
              ]}
            >
              <Feather name="book-open" size={24} color={"#FFF"} />
              <Text style={styles.tabItemLabel} adjustsFontSizeToFit numberOfLines={1}>Vademecum</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: "center",
    justifyContent: 'center',
    width: getWP(20),
    height: getHP(10),
    borderRadius: 50,
  },
  tabItemActiveContainer: {
    backgroundColor: "#F58C8C",
    justifyContent: 'center'
  },
  tabItemLabel: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 4,
  },
});

export default TabNavigator;
