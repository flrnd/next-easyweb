import { Session, User, Provider, PostgrestError } from "@supabase/supabase-js";
import { store } from "../store";

// Enums

export enum EnumAlert {
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Informative = "informative",
}

// Types.

export interface UserState {
  session: Session;
  user: User;
  errorMessage: string;
  profileDetails: IProfileDetails;
  userLoaded: boolean;
  billingDetails: IBillingDetails;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ProfileDetailsOptions = {
  userId: string;
};

export type SignInOptions = {
  email?: string;
  password?: string;
  provider?: Provider;
};

export type SignUpOptions = {
  email: string;
  password: string;
};

export type BillingInsertOptions = {
  billingFormData: IBillingDetails;
  isClient: boolean;
};

// Interfaces.

export interface Item {
  [key: string]: string;
}

export interface IProject {
  slug: string;
  title: string;
  client: string;
  year: string;
  description: string;
  ogImage: {
    url: string;
  };
  url: string;
  content: string;
}

export interface IPagination {
  current: number;
  items: IProject[];
  path: string;
}

export interface INavigationListItem {
  name: string;
  href: string;
}

export interface IServiceListItem {
  name: string;
  description: string;
  icon: JSX.Element;
  href?: string;
}

export interface ISocial {
  icon: string;
  href: string;
}

export interface IContact {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface IList {
  list: Array<IListItem>;
}

export interface IListItem {
  title: string;
  value: string[];
  icon: string;
}

export interface IResponse {
  status: number;
  message?: string;
  token?: string;
}

export interface IFormData {
  username: string;
  password: string;
}

export interface IChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
}

export interface IProfilePayload {
  data: any;
  status: number;
  error: PostgrestError;
}

export interface IFormDataMagicMail {
  email: string;
}

export interface IMessage {
  type?: string;
  content?: string;
}

export interface INotificationMessage {
  type?: "error" | "success" | "";
  content?: string;
}

// used for form
export interface IProfileData {
  firstName: string;
  lastName: string;
  companyName: string;
  avatar?: string;
}

// sql query
export interface IProfileDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  company_name: string;
  avatar_url?: string;
}

export interface IBillingDetails {
  id: string /* primary key */;
  nin_id: string /* National identification number id */;
  billing_address: string;
  postal_code: number;
  city: string;
  location: string;
  phone: string;
  is_client: boolean /* default false, intended for self data */;
  profile_id: string /* this is the user profile id foreign key */;
  email: string /* user registered email foreign key */;
}
