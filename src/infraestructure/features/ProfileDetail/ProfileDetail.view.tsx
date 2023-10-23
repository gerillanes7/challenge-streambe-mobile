import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useProfileDetail } from "./ProfileDetail.controller";
import { ProfileHeader } from "./components/ProfileHeader";
import {
  Feather,
  Fontisto,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { getHP, getWP } from "../../utils/dimensions";
import { UserInfoItem } from "./components/UserInfoItem";
import { ActionButton } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileDetail = () => {
  const { user, handleCallByPhone, handleSendEmail, handleSendWhatsApp } =
    useProfileDetail();

  return (
    <View style={styles.container}>
      <ProfileHeader imageURL={user?.photo} />
      <View style={styles.infoAndActionsContainer}>
        <View style={styles.userNameContainer}>
          <Text style={styles.userInfoLabel}>
            {user?.name} {user?.surnames}
          </Text>
        </View>
        <View style={styles.actionsContainer}>
          <ActionButton
            onPress={handleCallByPhone}
            icon={<Feather size={20} color={"#FFF"} name="phone" />}
          />
          <ActionButton
            onPress={handleSendEmail}
            icon={<Fontisto size={20} color={"#FFF"} name="email" />}
          />

          <ActionButton
            onPress={handleSendWhatsApp}
            icon={<Fontisto size={20} color={"#FFF"} name="whatsapp" />}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <UserInfoItem
            icon={<FontAwesome name="birthday-cake" size={20} color={"#000"} />}
            label="Fecha de nacimiento"
            description={user?.birthDate}
          />
          <UserInfoItem
            icon={
              <MaterialCommunityIcons
                name="gender-male-female"
                size={20}
                color={"#000"}
              />
            }
            label="Genero"
            description={user?.gender}
          />
          <UserInfoItem
            icon={<MaterialIcons name="work" size={20} color={"#000"} />}
            label="Profesion"
            description={user?.profesion}
            lastItem
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => AsyncStorage.clear()} style={styles.button}>
            <Text style={styles.buttonLabel}>Eliminar de mi lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  infoAndActionsContainer: {
    marginTop: getHP(10),
    flex: 1,
  },
  userNameContainer: {
    alignItems: "center",
    marginBottom: getHP(3),
  },
  userInfoLabel: {
    fontSize: 32,
    fontWeight: "600",
  },
  actionsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  userInfoContainer: {
    marginTop: getHP(5),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: getHP(3),
    paddingHorizontal: getWP(5)
  },
  button: {
    backgroundColor: '#F66262',
    height: getHP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonLabel: {
    color: '#FFF',
    fontWeight: '500'
  }
});
