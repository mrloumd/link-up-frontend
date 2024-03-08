export type UserData = {
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
};
