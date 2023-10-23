import { useNavigation } from "@react-navigation/native";
import { AppNavigatorType } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { InitialValuesFormType } from "./types";
import { useFormik } from "formik";
import { LoginSchema } from "./schemas/Login.schema";
import { useAuthStore } from "../../zustand";

const useLoginController = () => {
    const navigation = useNavigation<StackNavigationProp<AppNavigatorType>>();

    const setUser = useAuthStore(state => state.setUser)

    const initialValues: InitialValuesFormType = { username: "", password: "" };
    
    const formik = useFormik({
      initialValues,
      onSubmit: () => handleGoToHome(),
      validationSchema: LoginSchema,
    });
    const { errors, handleChange, handleSubmit, values } = formik;
    
    const handleGoToHome = () => {
        setUser(values.username)
        navigation.navigate('Tabs')
    }



    return { handleGoToHome, errors, handleChange, handleSubmit }
}

export default useLoginController