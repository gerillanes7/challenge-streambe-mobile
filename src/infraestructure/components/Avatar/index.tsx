import { Image } from "react-native";
import { IAvatar } from "./types";
import { useEffect, useState } from "react";

const DEFAULT_PHOTO =
  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg";

export const Avatar = ({ imageUrl, styles }: IAvatar) => {
  
  const [ image, setImage] = useState<string>('')

  const check = (error = null) => {
    if(imageUrl === null || imageUrl === "") {
      setImage(DEFAULT_PHOTO)

    } else { 
      setImage(imageUrl as string)
    }

    if(error) setImage(DEFAULT_PHOTO)
      
  }

  useEffect(() => {
    check()
  }, [])

  return (
    <Image
      source={{
        uri: image,
      }}
      onError={({ nativeEvent: {error} }) => check(error)}
      style={styles}
    />
  );
};
