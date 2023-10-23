import { ImageStyle, StyleProp } from "react-native";

export interface IAvatar {
    imageUrl: string | null,
    styles: StyleProp<ImageStyle>
}