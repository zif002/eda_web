import type { SpeakConfig } from 'qwik-speak';

// import { rewriteRoutes } from './speak-routes';

/**
 * Speak config
 */
export const config: SpeakConfig = {
  /** Uncomment this line to use url rewriting to translate paths */
  // rewriteRoutes,
  defaultLocale: { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles', units: { 'length': 'mile', dir: 'ltr' } },
  supportedLocales: [
    { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles', units: { 'length': 'mile' }, dir: 'ltr' },
    { lang: 'ru-RU', currency: 'RUB', timeZone: 'Europe/Moscow', units: { 'length': 'kilometer' }, dir: 'ltr' },
  ],
  assets: [
    'app' // Translations shared by the pages
  ],
  runtimeAssets: [
    'runtime' // Translations with dynamic keys or parameters
  ]
};