import { Session, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import {
  SiteConfig,
  ProfileDetails,
  SignInOptions,
  SignUpOptions,
  ProfileDetailsOptions,
} from "../../types";
import { supabase } from "../../util/supabase/supabase-client";
import { UserContext } from "./UserContext";

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
