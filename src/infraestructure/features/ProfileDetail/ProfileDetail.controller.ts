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

  return { user, handleCallByPhone, handleSendEmail, handleSendWhatsApp };
};
