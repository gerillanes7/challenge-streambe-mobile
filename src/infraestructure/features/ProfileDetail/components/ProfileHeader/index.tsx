import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "../../../../components";
import { IProfileHeader } from "./types";
import { getHP, getWP } from "../../../../utils/dimensions";

export const ProfileHeader = ({ imageURL }: IProfileHeader) => {
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Avatar imageUrl={imageURL} styles={styles.avatar} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getHP(20),
    backgroundColor: "#F66262",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    position: 'relative'
  },
  imageContainer: {
    position: "absolute",
    bottom: getHP(-8),
    alignSelf: "center",
  },
  avatar: {
    borderWidth: 5,
    borderColor: "#FFF",
    height: getHP(18),
    width: getWP(35),
    borderRadius: 100,
  },
});
