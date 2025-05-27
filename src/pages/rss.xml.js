import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Glitch and Glory | Blog',
    description: 'Noticias y actualidad sobre el mundo de la tecnología, la programación y la IA de Glitch and Glory.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}