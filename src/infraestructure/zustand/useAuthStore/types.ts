export interface IAuthStore {
    user: string,
    setUser: (user: string) => void;
}