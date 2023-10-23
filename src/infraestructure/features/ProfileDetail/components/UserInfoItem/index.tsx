import { View, StyleSheet, Text } from "react-native";
import { IUserInfoItem } from "./types";
import { getHP, getWP } from "../../../../utils/dimensions";

export const UserInfoItem = ({
  icon,
  label,
  description,
  lastItem = false,
}: IUserInfoItem) => {
  return (
    <View style={[styles.container, lastItem && styles.withBorderBottom]}>
      <View style={styles.iconAndLabelContainer}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: getHP(2),
    borderColor: "#EDEDED",
    borderTopWidth: 3,
  },
  withBorderBottom: {
    borderBottomWidth: 3,
  },
  iconAndLabelContainer: {
    flexDirection: "row",
  },
  label: {
    fontWeight: "500",
    marginLeft: getWP(3),
  },
  description: {
    fontWeight: "200",
    textTransform: "capitalize",
  },
});
