import { useEffect, useState } from "react";
import { Container } from "../components/layout";
import { supabase } from "../lib/util/supabaseClient";
import SignIn from "./account/signin";
import Account from "./user/account";

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
    <Container>
      {!session ? (
        <SignIn />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </Container>
  );
}
