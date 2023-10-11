import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { Header } from "~/components/header";
export default component$(() => {
  return <Speak assets={['home']}><Header/></Speak>;
});

export const head: DocumentHead = {
  title: 'runtime.head.home.title',
  meta: [
    {
      name: "description",
      content: "runtime.head.home.description",
    },
  ],
};
