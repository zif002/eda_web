import { component$ } from "@builder.io/qwik"
import { useTranslate } from "qwik-speak";

export const Nav =  component$(() => {
  const t = useTranslate();
  return <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-10">
  
  <div class="flex lg:flex-1">
      <a href="/" class="mx-2">{t('home.menu')}</a>
      <a href="/orders" class="mx-2">{t('home.orders')}</a>
  </div>
  
  <div class="lg:flex-1 text-center">
    <span class="text-white px-10 py-5 bg-main text-4xl font-bold">{t('home.logoName')}</span></div>
  <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <div>{t('home.basketName')}</div>
      <a href="/profile"  class="mx-2">{t('home.profile')}</a>
  </div>
</nav>
}) 