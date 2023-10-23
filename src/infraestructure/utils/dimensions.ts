import { Dimensions } from "react-native";

export const getWP = (percentage: number) => {
    return Dimensions.get('window').width * (percentage / 100);
}

export const getHP = (percentage: number) => {
    return Dimensions.get('window').height * (percentage / 100);
}