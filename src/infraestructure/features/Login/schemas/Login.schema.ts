import { object, string } from 'yup';
import { LoginFormErrorMessages } from '../../../commons/validations';

export const LoginSchema = object({
    username: string().email(LoginFormErrorMessages.VALID_EMAIL).required(LoginFormErrorMessages.USERNAME_REQUIRED),
    password: string().required(LoginFormErrorMessages.PASSWORD_REQUIRED)
})