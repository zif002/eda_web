import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikSpeakInline } from 'qwik-speak/inline';
export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(), 
      qwikSpeakInline({
        supportedLangs: ['en-US', 'ru-RU'],
        defaultLang: 'en-US',
        assetsPath: 'i18n'
      }),
      tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    test: {
      include: ['./src/**']
    },
  };
  
});
