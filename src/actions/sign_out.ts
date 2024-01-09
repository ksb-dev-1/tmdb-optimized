"use server";

import * as auth from "../auth";
import { revalidatePath } from "next/cache";

export async function signOut() {
  revalidatePath("/");
  return auth.signOut();
}
