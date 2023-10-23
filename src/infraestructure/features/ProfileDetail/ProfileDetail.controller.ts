import * as Linking from "expo-linking";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AppNavigatorType } from "../../navigation/types";

export const useProfileDetail = () => {
  const { params } = useRoute<RouteProp<AppNavigatorType, "ProfileDetail">>();

  const { user } = params;

  const handleCallByPhone = () => Linking.openURL(`tel:${user?.phone}`);

  const handleSendEmail = () => Linking.openURL(`mailto:${user?.email}`);

  const handleSendWhatsApp = () =>
    Linking.openURL(`https://wa.me/${user?.phone}`);

  const formatDate = (date: string) => {
    const dateToFormat = new Date(date);

    return dateToFormat.toLocaleDateString("en-US");
  };

  const translateGender = (gender: string) => {
    const possibleGenders: Record<string, string> = {
      FEMALE: "Femenino",
      MALE: "Masculino",
    };

    return possibleGenders[gender];
  };

  return {
    user,
    handleCallByPhone,
    handleSendEmail,
    handleSendWhatsApp,
    formatDate,
    translateGender,
  };
};
