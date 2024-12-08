import type { Role } from "../hook/use-game";

export const profilePicture = (name: string) => `https://api.dicebear.com/9.x/dylan/png?seed=${name}&backgroundColor=transparent`;
export const rolePicture = (role: Role) => `/roles/${role}.png`;