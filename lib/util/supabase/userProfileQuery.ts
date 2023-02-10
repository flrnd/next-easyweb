import { supabase } from "lib/util/supabase/supabase-client";

interface IUserProfileQuery {
  userId: string;
}

const userProfileQuery = async ({ userId }: IUserProfileQuery) => {
  try {
    const results = await supabase
      .from("profiles")
      .select("first_name, last_name, avatar_url, company_name")
      .eq("id", userId)
      .single();
    const { data, error, status } = results;

    return { data, error, status };
  } catch (error) {
    return error;
  }
};

export default userProfileQuery;
