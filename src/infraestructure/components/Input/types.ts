export interface IInput {
  type: "text" | "password";
  handleChange: (text: string) => void;
}

export enum InputTypes {
  TEXT = "text",
  PASSWORD = "password",
}
