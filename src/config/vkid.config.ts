import { APP_ROUTES } from "@/constant/app-routes.constant";
import * as VKID from "@vkid/sdk";

VKID.Config.set({
  app: 51906376, // App identifier.
  redirectUrl:
    (process.env.NODE_ENV === "development"
      ? "http://localhost"
      : "https://cells-web.vercel.app/") + APP_ROUTES.PERSON, // URL to redirect to after signing in.
});

export default VKID;
