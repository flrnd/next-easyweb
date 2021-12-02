import { Session, User, Provider } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { SiteConfig, ProfileDetails } from "../../types/interfaces";
import { supabase } from "./supabaseClient";

type UserContextType = {
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

type ProfileDetailsOptions = {
  userId: string;
};

type SignInOptions = {
  email?: string;
  password?: string;
  provider?: Provider;
};

type SignUpOptions = {
  email: string;
  password: string;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UserContextProvider = (props: any): any => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profileDetails, setProfileDetails] = useState<ProfileDetails | null>(
    null
  );
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const getProfileDetails = (userId: string) =>
    supabase
      .from("profiles")
      .select("first_name, last_name, billing_address, avatar_url")
      .eq("id", userId)
      .single();

  //const getSiteConfig = () =>
  //  supabase.from<SiteConfig>("site_config").select("*").single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getProfileDetails(user.id)]).then((results) => {
        const profileDetailsPromise = results[0];
        //const siteConfigPromise = results[1];

        //console.log("site_config", siteConfigPromise);
        if (profileDetailsPromise.status === "fulfilled")
          setProfileDetails(profileDetailsPromise.value.data);

        /*
          if (siteConfigPromise.status === "fulfilled")
            setSiteConfig(siteConfigPromise.value.data);
          */

        setUserLoaded(true);
      });
    }
  }, [user]);

  const value = {
    session,
    user,
    profileDetails: profileDetails,
    userLoaded,
    siteConfig,
    signIn: (options: SignInOptions) => supabase.auth.signIn(options),
    signUp: (options: SignUpOptions) => supabase.auth.signUp(options),
    signOut: () => {
      setProfileDetails(null);
      setSiteConfig(null);
      return supabase.auth.signOut();
    },
    getProfileDetails: (options: ProfileDetailsOptions) =>
      supabase
        .from("profiles")
        .select("first_name, last_name, billing_address, avatar_url")
        .eq("id", options.userId)
        .single(),
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
