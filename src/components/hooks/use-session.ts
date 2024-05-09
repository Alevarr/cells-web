import { VKSession } from "@/types";
import { useEffect, useState } from "react";

export default function useSession() {
  const [session, setSession] = useState<VKSession | null>(null);
  useEffect(() => {
    setSession(VK.Auth.getSession((response: VKSession | null) => response));
  }, [setSession]);
  return session;
}
