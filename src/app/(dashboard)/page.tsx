import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/constant/app-routes.constant";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Hello Aboba</h1>
      <Link href={APP_ROUTES.PERSON}>
        <Button>Person</Button>
      </Link>
    </>
  );
}
