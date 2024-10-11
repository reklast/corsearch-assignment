import { User } from "../types/users";

const apiUrl = process.env.API_URL;

const getUsers = async (): Promise<User[] | undefined> => {
  try {
    if (!apiUrl) return;
    const res = await fetch(apiUrl);
    return res.json();
  } catch {
    console.error("server request failed");
  }
};

export { getUsers };
