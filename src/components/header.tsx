import Logo from "./icons/logo";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { APP_ROUTES } from "@/constant/app-routes.constant";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import VKAuthButton from "./vk-auth-button/vk-auth-button";

export default function Header({
  isUserAuthenticated,
}: {
  isUserAuthenticated?: boolean;
}) {
  return (
    <nav className="flex flex-row justify-between items-center align-middle py-6 border-b-2 border-primary mb-6">
      <div className="flex flex-row gap-3 sm:gap-6">
        <Link href={APP_ROUTES.LANDING}>
          <Logo className="cursor-pointer" />
        </Link>

        <Separator orientation="vertical" className="h-auto" />
        <Link
          href={APP_ROUTES.SEARCH}
          className="flex flex-row items-center text-muted-foreground text-sm sm:text-base"
        >
          <span>Главная</span>
        </Link>
      </div>
      {isUserAuthenticated ? (
        <Avatar className="w-6 h-6 sm:w-9 sm:h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <VKAuthButton />
      )}
    </nav>
  );
}
