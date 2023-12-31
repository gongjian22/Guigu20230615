export interface loginForm {
  username: string;
  password: number;
}

interface dataType {
  token?: string;
  message?: string;
}

export interface loginResponseData {
  code: number;
  data: dataType;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface user {
  checkUser: userInfo;
}

export interface userResponseData {
  code: number;
  data: user;
}
