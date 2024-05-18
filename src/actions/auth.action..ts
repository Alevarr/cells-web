"use server";

import { VKSession } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setSession(session: VKSession) {
  console.log(session);
  cookies().set("session", JSON.stringify(session), {
    expires: session.expire * 1000,
  });
  console.log(cookies().get("session"));
  revalidatePath("/", "layout");
}

export async function getSession() {
  const sessionCookie = cookies().get("session");
  if (!sessionCookie) return null;
  const sessionString = sessionCookie.value;
  return JSON.parse(sessionString);
}
