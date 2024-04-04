export type UserData = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  age?: number | null;
  birthday?: Date | null;
  gender?: string | null;
  country?: {
    value: string;
    label: string;
  };
  language?: {
    value: string;
    label: string;
  };
  following?: number;
  followers?: number;
  verified?: boolean;
  change_password?: object;
  profile_photo?: {
    _id: string;
    file_name: string;
    file_path: string;
  };
  background_photo?: {
    _id: string;
    file_name: string;
    file_path: string;
  };
};

export type PostData = {
  _id?: string;
  description?: string;
  uploads?: {
    _id: string;
    file_name: string;
    file_path: string;
  }[];
  likes?: number;
  comments?: number;
  shares?: number;
  privacy?: { value: string; label: string };
  archives?: boolean;
  user_id?: string;
};
