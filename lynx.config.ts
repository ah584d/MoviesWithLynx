import { defineConfig } from "@lynx-js/rspeedy";
import dotenv from "dotenv";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

dotenv.config();

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  source: {
    define: {
      "process.env": {
        TMDB_API_KEY: JSON.stringify(process.env.TMDB_API_KEY),
      },
    },
  },
});
