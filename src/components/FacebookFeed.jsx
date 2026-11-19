import { FACEBOOK_PAGE } from '../data/facebookPosts';

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/100064620877860/';
const FACEBOOK_PLUGIN_URL = `https://www.facebook.com/plugins/page.php?${new URLSearchParams({
  href: FACEBOOK_PAGE_URL,
  tabs: 'timeline',
  width: '500',
  height: '1000',
  small_header: 'true',
  adapt_container_width: 'true',
  hide_cover: 'true',
  hide_cta: 'true',
  show_facepile: 'false',
})}`;

export default function FacebookFeed() {
  return (
    <section className="border-t border-gray-200/70 bg-gradient-to-b from-gray-50 to-orange-50/30 py-12 sm:py-16" aria-label="Actualités de Famissio sur Facebook">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <img
              src={FACEBOOK_PAGE.avatar}
              alt=""
              className="h-11 w-11 rounded-full bg-white p-1 object-contain shadow-sm ring-1 ring-orange-100"
              width="44"
              height="44"
              loading="lazy"
            />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-700">Famissio sur Facebook</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Les dernières nouvelles
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Publications, photos et vidéos récentes directement issues de notre page Facebook.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_18px_55px_rgba(72,43,26,0.12)]">
          <iframe
            title="Publications récentes de la page Facebook Famissio"
            src={FACEBOOK_PLUGIN_URL}
            className="block h-[1000px] w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

      </div>
    </section>
  );
}
