export interface AuthUserInterface {
  message: string;
  token: string;
}

export interface User {
  username: string;
  password: string;
}

export interface RegisteredUser {
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  username: string;
  password: string;
}
