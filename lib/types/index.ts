import { Session, User, Provider } from "@supabase/supabase-js";
import { store } from "../store";

// Types.

export interface UserState {
  session: Session;
  user: User;
  error: Error;
  profileDetails: ProfileDetails;
  userLoaded: boolean;
  siteConfig: SiteConfig;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserContextType = {
  session: Session;
  user: User;
  profileDetails: ProfileDetails;
  userLoaded: boolean;
  siteConfig: SiteConfig;
  signIn: (options: SignInOptions) => Promise<{
    session: Session | null;
    user: User | null;
    provider?: Provider;
    url?: string | null;
    error: Error | null;
    data: Session | null;
  }>;
  signUp: (options: SignUpOptions) => Promise<{
    user: User | null;
    session: Session | null;
    error: Error | null;
    data: Session | User | null;
  }>;
  signOut: () => void;
  getProfileDetails: (options: ProfileDetailsOptions) => Promise<{
    data: ProfileDetails | null;
    error: Error | null;
    status: number | null;
  }>;
};

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

export interface IProfileData {
  firstName: string;
  lastName: string;
  billingAddress: string;
  avatar?: string;
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

export interface ProfileDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  billing_address: string;
  avatar_url?: string;
}

export interface SiteConfig {
  id: string /* primary key */;
  user_id: string;
  data: JSON;
}
