const fallbackSiteUrl =
  'https://sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site';

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl
).replace(/\/$/, '');
