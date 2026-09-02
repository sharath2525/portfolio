const defaultSiteUrl = 'https://sharathchandra.co.in';

function normalizeSiteUrl(value: string | undefined): string {
  const rawValue = value?.trim();

  if (!rawValue) {
    return defaultSiteUrl;
  }

  // Be defensive about common dashboard-entry mistakes, such as pasting the
  // entire KEY=value pair into Vercel's Value field or wrapping it in quotes.
  const withoutKey = rawValue.replace(/^NEXT_PUBLIC_SITE_URL\s*=\s*/i, '');
  const withoutQuotes = withoutKey.replace(/^['"]|['"]$/g, '').trim();
  const withProtocol = /^https?:\/\//i.test(withoutQuotes)
    ? withoutQuotes
    : `https://${withoutQuotes}`;

  try {
    const url = new URL(withProtocol);

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return defaultSiteUrl;
    }

    return url.origin;
  } catch {
    return defaultSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
);
