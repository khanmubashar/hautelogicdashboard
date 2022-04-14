import { buildConfig } from "payload/config";
import Homepage from "./collections/Homepage";
import Media from "./collections/Media";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Homepage,
    Media
    // Add Collections here
    // Examples
  ],
});
