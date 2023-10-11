import type { RequestHandler } from "@builder.io/qwik-city";

import { config } from '../services/translates/speak-config';
// import { rewriteRoutes } from '../speak-routes';

export const onRequest: RequestHandler = ({ params, locale, error }) => {
  // Check supported locales
  const supportedLocale = config.supportedLocales.find(value => value.lang === params.lang)

  // Check for 404 error page
  const lang = supportedLocale
    ? supportedLocale.lang
    : !params.lang && config.defaultLocale.lang

  if (!lang) throw error(404, 'Page not found');

  // Set Qwik locale
  locale(lang);
};