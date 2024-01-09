"use server";

import * as auth from "@/auth";

export async function githubSignIn() {
  return auth.signIn("github");
}
