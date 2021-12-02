import { useEffect, useState } from "react";
import { supabase } from "../lib/util/supabaseClient";
import Example from "./example";

export default function Index(): JSX.Element {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      {
        setSession(session);
      }
    });
  }, []);

  return (
    <>
      {session && session.user.email}
      <Example />
    </>
  );
}
