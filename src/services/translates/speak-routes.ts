import type { RewriteRouteOption } from 'qwik-speak';
export const rewriteRoutes: RewriteRouteOption[] = [
  // No prefix for default locale
  // {
  //   paths: {
  //     'page': 'page'
  //   }
  // },
  {
    prefix: 'en-EN',
    paths: {
      'page': 'page'
    }
  }, {
    prefix: 'ru-RU',
    paths: {
      'page': 'page'
    }
  }
]