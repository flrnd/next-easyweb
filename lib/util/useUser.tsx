import { Session, User, Provider } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { SiteConfig, UserDetails } from "../../types/interfaces";
import { supabase } from "./supabaseClient";

type UserContextType = {
  session: Session;
  user: User;
  userDetails: UserDetails;
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

export const UserContextProvider = (props: any): any => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
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

  const getUserDetails = () =>
    supabase.from<UserDetails>("users").select("*").single();
  const getSiteConfig = () =>
    supabase.from<SiteConfig>("site_config").select("*").single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails(), getSiteConfig()]).then(
        (results) => {
          const userDetailsPromise = results[0];
          const siteConfigPromise = results[1];

          //console.log("site_config", siteConfigPromise);
          if (userDetailsPromise.status === "fulfilled")
            setUserDetails(userDetailsPromise.value.data);

          if (siteConfigPromise.status === "fulfilled")
            setSiteConfig(siteConfigPromise.value.data);

          setUserLoaded(true);
        }
      );
    }
  }, [user]);

  const value = {
    session,
    user,
    userDetails,
    userLoaded,
    siteConfig,
    signIn: (options: SignInOptions) => supabase.auth.signIn(options),
    signUp: (options: SignUpOptions) => supabase.auth.signUp(options),
    signOut: () => {
      setUserDetails(null);
      setSiteConfig(null);
      return supabase.auth.signOut();
    },
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
