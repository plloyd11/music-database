import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute } from "../../chunks/ssr.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section class="px-6 py-24 lg:px-6"><div class="max-w-2xl mx-auto text-center"><h1 class="text-7xl"><span class="text-transparent bg-gradient-to-br from-primary-200 to-primary-600 bg-clip-text box-decoration-clone">${escape(title)}</span></h1></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let albums = data.albums.records;
  let filterActive = false;
  albums.sort((a, b) => {
    if (a.fields.Band < b.fields.Band) {
      return -1;
    }
    if (a.fields.Band > b.fields.Band) {
      return 1;
    }
    return 0;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main>${validate_component(Hero, "Hero").$$render($$result, { title: "Riffs of 2023" }, {}, {})} <section class="px-4 mx-auto lg:px-6 max-w-7xl"><button class="block mx-auto text-xl">${escape("Hit me with the fuckin' best shit 🔥")}</button> <div class="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">${albums ? `${each(albums.filter((album) => album.fields && album.fields.Artwork && album.fields.Artwork.length > 0 && album.fields["Album Title"] && album.fields.Band && !filterActive), (album) => {
    return `<div class="relative flex flex-col gap-2 card card-hover !bg-surface-800"><a${add_attribute("href", album.fields["Music Link"], 0)} target="_blank" rel=""><img${add_attribute(
      "src",
      album.fields.Artwork.length > 0 ? album.fields.Artwork[0].url : "default.jpg",
      0
    )}${add_attribute("alt", album.fields["Album Title"], 0)} class="rounded-tl-container-token rounded-tr-container-token"></a> <div class="p-5 space-y-6">${album.fields.Rating ? `<span class="text-lg text-surface-300">⚔️ ${escape(album.fields.Rating)} out of 10 ⚔️</span>` : `<span class="italic text-primary-300" data-svelte-h="svelte-1ebwo7q">Not yet rated</span>`} <div><span class="block text-2xl font-semibold text-surface-200">${escape(album.fields["Album Title"])}</span> <span class="text-lg font-light text-surface-400">${escape(album.fields.Band)}</span> </div></div> </div>`;
  })}` : ``}</div></section></main>`;
});
export {
  Page as default
};
