import { View, StyleSheet, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { getHP, getWP } from "../../../../utils/dimensions";

export const HeaderWithNotifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconAndTitleContainer}>
          <Feather name="home" size={30} color={"#FFF"} />
          <Text style={styles.title}>Tu lista de contactos</Text>
        </View>
        <View>
          <MaterialIcons name="circle-notifications" size={30} color={"#FFF"} />
          <View style={styles.notificationCircle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F66262",
    height: getHP(9),
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWP(4),
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
    marginLeft: getWP(2)
  },
  iconAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationCircle: {
    width: getWP(2),
    height: getHP(1),
    backgroundColor: '#54B9E4',
    borderRadius: 50,
    position: 'absolute',
    right: 2
  }
});
