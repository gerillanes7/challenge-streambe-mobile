import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLoginController from "./Login.controller";
import { Input } from "../../components";
import { getHP, getWP } from "../../utils/dimensions";

const Login = () => {
  const { handleSubmit, handleChange, errors } = useLoginController();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.title}>Log in</Text>
        <Input handleChange={handleChange("username")} type="text" />
        {errors.username && (
          <Text style={styles.errorLabel}>{errors.username}</Text>
        )}
        <Input handleChange={handleChange("password")} type="password" />
        {errors.password && (
          <Text style={styles.errorLabel}>{errors.password}</Text>
        )}
        <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
          <Text style={styles.buttonLabel}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginFormContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: getWP(3),
  },
  title: {
    fontSize: 42,
    marginTop: getHP(10),
    marginBottom: getHP(3),
  },
  button: {
    backgroundColor: "#000",
    height: getHP(7),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonLabel: {
    color: "#FFF",
    textTransform: "uppercase",
  },
  errorLabel: {
    marginBottom: 10,
    color: "red",
  },
});

export default Login;
