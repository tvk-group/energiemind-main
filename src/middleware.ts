import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(de|en|fr|es|it|nl|pt|pl|ru|uk|tr|ar|zh|ja|ko|hi|sv|no|da|fi|cs|ro|hu|el|bg|hr|sk|lt|id|vi)/:path*"],
};
