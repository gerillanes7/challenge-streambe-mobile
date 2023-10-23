import { useNavigation } from "@react-navigation/native";
import { useGetUsers } from "../../hooks";
import { UserData } from "../../../domain/entities/UserDTO";
import { AppNavigatorType } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

export const useHomeController = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigatorType>>();

  const { data: users, loading } = useGetUsers();

  const handleGoToDetail = (user: UserData) => {
    navigation.navigate("ProfileDetail", { user });
  };

  return { users, loading, handleGoToDetail };
};
