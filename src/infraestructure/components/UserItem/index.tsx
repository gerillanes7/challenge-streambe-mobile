import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";
import { IUserItem } from "./types";
import { MaterialIcons } from '@expo/vector-icons/'
import { Avatar } from "../Avatar";
import { getHP, getWP } from "../../utils/dimensions";


export const UserItem = ({ user, handleGoToDetail }: IUserItem) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleGoToDetail(user)}>
      <View style={styles.imageAndUserInfoContainer}>
        <Avatar imageUrl={user.photo} styles={styles.avatar} />
        <Text style={styles.userInfoLabel}>
          {user.name} {user.surnames}
        </Text>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={30} color={'#F66262'}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: getWP(3),
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#EDEDED'
  },
  imageAndUserInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: getWP(3),
  },
  avatar: {
    width: getWP(25),
    height: getHP(12),
    borderRadius: 50
  }
});
