"use client";

import { useEffect, useMemo, useState } from "react";
import VKAuthButton from "./vk-auth-button/vk-auth-button";
import { VKSession } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useSession from "./hooks/use-session";

export default function UserOrLogin() {
  const session = useSession();
  if (!session) return <VKAuthButton />;

  return (
    <Avatar className="w-6 h-6 sm:w-9 sm:h-9">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
