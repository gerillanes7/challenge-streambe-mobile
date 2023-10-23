import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { IInput, InputTypes } from "./types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getHP, getWP } from "../../utils/dimensions";

export const Input = ({ type = "text", handleChange }: IInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  if (type === InputTypes.TEXT)
    return <TextInput style={styles.input} onChangeText={handleChange} />;

  if (type === InputTypes.PASSWORD)
    return (
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          secureTextEntry={showPassword}
          onChangeText={handleChange}
        />
        <MaterialCommunityIcons
          name={!showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={handleShowPassword}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  input: {
    height: getHP(6.5),
    marginBottom: getHP(2),
    borderWidth: 3,
    padding: getHP(2),
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
  },
  icon: {
    marginRight: getWP(3),
    position: "absolute",
    right: 0,
    top: 14,
  },
});
