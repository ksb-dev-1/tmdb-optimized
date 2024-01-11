"use server";

import * as auth from "../auth";
import { revalidatePath } from "next/cache";

export async function signOut() {
  revalidatePath("/");
  revalidatePath("/pages/watchlist");
  revalidatePath("/pages/watchlist/movies");
  revalidatePath("/pages/watchlist/tv");

  return auth.signOut();
}
