import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { INavigationHeader } from "./types";
import { getWP } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";

export const NavigationHeader = ({ name }: INavigationHeader) => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign
          name="arrowleft"
          size={20}
          color={"#FFF"}
          onPress={handleGoBack}
        />
      </TouchableOpacity>
      <Text style={styles.screenNameLabel}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    padding: getWP(5),
    alignItems: 'center'
  },
  screenNameLabel: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "500",
    marginLeft: getWP(5),
  },
});
